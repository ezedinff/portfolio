import styled from 'styled-components';

const StyledTerminal = styled.section`
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 0;
  
  .terminal-container {
    width: 100%;
    height: calc(100vh - 450px);
    background-color: var(--light-navy);
    border-radius: 8px;
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .terminal-container {
      height: calc(100vh - 200px);
    }
  }
  
  .terminal-header {
    background-color: var(--lightest-navy);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      
      &.red { background-color: #ff5f56; }
      &.yellow { background-color: #ffbd2e; }
      &.green { background-color: #27ca3f; }
    }
    
    .title {
      margin-left: 12px;
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }
  }
  
  .terminal-body {
    padding: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    line-height: 1.6;
    flex: 1;
    cursor: text;
    position: relative;
    overflow-y: auto;
    
    .line {
      margin-bottom: 8px;
      
      &.prompt {
        color: var(--green);
        
        .user { color: var(--green); }
        .at { color: var(--slate); }
        .path { color: var(--blue); }
        .symbol { color: var(--green); }
      }
      
      &.output {
        color: var(--light-slate);
        margin-left: 0;
        white-space: pre-line;
      }
      
      &.command {
        color: var(--lightest-slate);
      }
      
      &.error {
        color: #ff6b6b;
      }
      
      &.contact {
        color: var(--light-slate);
        
        a {
          color: var(--green);
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    
    .cursor {
      display: inline-block;
      width: 8px;
      height: 18px;
      background-color: var(--green);
      animation: blink 1s infinite;
      margin-left: 2px;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    .command-hint {
      color: var(--slate);
      font-style: italic;
      margin-top: 20px;
      
      .available-commands {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        
        .cmd {
          color: var(--green);
          cursor: pointer;
          margin-right: 12px;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    
    .hidden-input {
      position: absolute;
      left: -9999px;
      opacity: 0;
    }
  }
`;

export default StyledTerminal;