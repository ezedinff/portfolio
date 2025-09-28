import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import commands from './commands';
import StyledTerminal from './styles';

// Memoized Terminal Line Component - only re-renders if line content changes
const TerminalLine = React.memo(({ line }: { line: { type: string, content: string } }) => {
  return (
    <div className={`line ${line.type}`}>
      {line.type === 'contact' ? (
        <div>
          <div>📱 Phone: <a href="tel:+46761463164">+46 76 146 31 64</a></div>
          <div>📧 Email: <a href="mailto:ezedin.fedlu@gmail.com">ezedin.fedlu@gmail.com</a></div>
          <div>💼 LinkedIn: <a href="https://linkedin.com/in/ezedinff" target="_blank" rel="noopener noreferrer">linkedin.com/in/ezedinff</a></div>
          <div>🐙 GitHub: <a href="https://github.com/ezedinff" target="_blank" rel="noopener noreferrer">github.com/ezedinff</a></div>
          <div>🌐 Website: <a href="https://www.ezedinfedlu.com" target="_blank" rel="noopener noreferrer">ezedinfedlu.com</a></div>
          <div>🌐 Telegram: <a href="https://t.me/leveling_up" target="_blank" rel="noopener noreferrer">@leveling_up</a></div>
        </div>
      ) : (
        <div>{line.content}</div>
      )}
    </div>
  );
});

// Memoized Terminal Lines Container - only re-renders when lines array changes
const TerminalLines = React.memo(({ lines }: { lines: Array<{type: string, content: string}> }) => {
  return (
    <>
      {lines.map((line, index) => (
        <TerminalLine key={index} line={line} />
      ))}
    </>
  );
});

// Memoized Terminal Prompt Component - only re-renders when display values change
const TerminalPrompt = React.memo(({ displayCommand, showCursor }: { 
  displayCommand: string, 
  showCursor: boolean 
}) => {
  return (
    <div className="line prompt">
      <span className="user">ezedin</span>
      <span className="at">@</span>
      <span className="path">portfolio</span>
      <span className="symbol">:~$ </span>
      <span className="command">{displayCommand}</span>
      {showCursor && <span className="cursor"></span>}
    </div>
  );
});

// Memoized Command Hints Component - completely static, never re-renders
const CommandHints = React.memo(({ onCommandClick }: { onCommandClick: (cmd: string) => void }) => {
  const commandsList = useMemo(() => ['whoami', 'about', 'experience', 'skills', 'projects', 'contact', 'help'], []);
  
  return (
    <div className="command-hint">
      <div>💡 Try these commands:</div>
      <div className="available-commands">
        {commandsList.map((cmd) => (
          <span
            key={cmd}
            onClick={() => onCommandClick(cmd)}
            className="cmd"
          >
            {cmd}
          </span>
        ))}
      </div>
      <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--slate)' }}>
        Tip: Click commands above or type them manually. Press Enter to execute.
      </div>
    </div>
  );
});


// Memoized Terminal Header Component - completely static
const TerminalHeader = React.memo(() => {
  return (
    <div className="terminal-header">
      <div className="dot red"></div>
      <div className="dot yellow"></div>
      <div className="dot green"></div>
      <div className="title">ezedin@portfolio:~</div>
    </div>
  );
});

// Auto Scroll Hook
const useAutoScroll = (
  terminalBodyRef: React.RefObject<HTMLDivElement>,
  dependencies: any[],
  shouldScroll: boolean
) => {
  const scrollToBottomInstant = useCallback(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalBodyRef]);

  useEffect(() => {
    if (shouldScroll) {
      scrollToBottomInstant();
    }
  }, [...dependencies, shouldScroll]);

  return { scrollToBottomInstant };
};

// Typing Animation Hook
const useTypingAnimation = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const typeText = useCallback((text: string, callback?: () => void) => {
    setIsTyping(true);
    setCurrentCommand('');
    let i = 0;
    
    const interval = setInterval(() => {
      setCurrentCommand(text.slice(0, i + 1));
      i++;
      
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  return { currentCommand, isTyping, typeText };
};

// Main Terminal Component
const HeroV2 = () => {
  const [lines, setLines] = useState<Array<{type: string, content: string}>>([]);
  const [inputValue, setInputValue] = useState('');
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const isUserInteracting = useRef(false);

  const { currentCommand, isTyping, typeText } = useTypingAnimation();
  
  // Memoize the display command to prevent unnecessary prompt re-renders
  const displayCommand = useMemo(() => {
    return isTyping ? currentCommand : inputValue;
  }, [isTyping, currentCommand, inputValue]);

  const showCursor = useMemo(() => !isTyping, [isTyping]);

  const { scrollToBottomInstant } = useAutoScroll(
    terminalBodyRef,
    [lines, currentCommand, inputValue],
    !userScrolledUp
  );

  const executeCommand = useCallback((cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === 'clear') {
      setLines([]);
      setUserScrolledUp(false);
      return;
    }
    
    if (command === 'exit') {
      setLines(prev => [
        ...prev,
        { type: 'command', content: `$ ${cmd}` },
        { type: 'output', content: 'Thanks for visiting! Portfolio terminal session ended.' }
      ]);
      return;
    }
    
    if (command === 'contact') {
      setLines(prev => [
        ...prev,
        { type: 'command', content: `$ ${cmd}` },
        { type: 'contact', content: 'CONTACT_INFO' }
      ]);
      return;
    }
    
    const output = commands[command as keyof typeof commands] || `Command not found: ${cmd}. Type 'help' for available commands.`;
    
    setLines(prev => [
      ...prev,
      { type: 'command', content: `$ ${cmd}` },
      { type: output.includes('Command not found') ? 'error' : 'output', content: output }
    ]);
  }, []);

  const handleCommandClick = useCallback((cmd: string) => {
    if (isTyping) return;
    
    isUserInteracting.current = true;
    setUserScrolledUp(false);
    
    typeText(cmd, () => {
      setTimeout(() => {
        executeCommand(cmd);
        isUserInteracting.current = false;
      }, 300);
    });
  }, [isTyping, typeText, executeCommand]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim() && !isTyping) {
      isUserInteracting.current = true;
      setUserScrolledUp(false);
      
      executeCommand(inputValue.trim());
      setInputValue('');
      
      setTimeout(() => {
        isUserInteracting.current = false;
      }, 100);
    }
  }, [inputValue, isTyping, executeCommand]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    setInputValue(newValue);
    setUserScrolledUp(false);
    requestAnimationFrame(scrollToBottomInstant);
  }, [scrollToBottomInstant]);

  const handleInputFocus = useCallback(() => {
    setUserScrolledUp(false);
    requestAnimationFrame(scrollToBottomInstant);
  }, [scrollToBottomInstant]);

  const handleScroll = useCallback(() => {
    if (!terminalBodyRef.current || isUserInteracting.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = terminalBodyRef.current;
    const currentScrollTop = scrollTop;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 20;
    
    // Detect if user manually scrolled up
    if (currentScrollTop < lastScrollTop.current - 5 && !isAtBottom) {
      setUserScrolledUp(true);
    } else if (isAtBottom) {
      setUserScrolledUp(false);
    }
    
    lastScrollTop.current = currentScrollTop;
  }, []);

  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Initial setup and welcome sequence
  useEffect(() => {
    inputRef.current?.focus();
    
    setTimeout(() => {
      typeText('whoami', () => {
        setTimeout(() => {
          executeCommand('whoami');
          setTimeout(() => {
            typeText('help', () => {
              setTimeout(() => executeCommand('help'), 300);
            });
          }, 1500);
        }, 300);
      });
    }, 1000);
  }, [typeText, executeCommand]);

  return (
    <StyledTerminal id="home">
      <div className="terminal-container">
        <TerminalHeader />
        
        <div 
          className="terminal-body" 
          ref={terminalBodyRef} 
          onClick={handleTerminalClick} 
          onScroll={handleScroll}
        >
          <input
            ref={inputRef}
            className="hidden-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={handleInputFocus}
            autoFocus
          />
          
          <TerminalLines lines={lines} />
          
          <TerminalPrompt
            displayCommand={displayCommand}
            showCursor={showCursor}
          />
          
          <CommandHints onCommandClick={handleCommandClick} />
        </div>
      </div>
    </StyledTerminal>
  );
};

export default HeroV2;