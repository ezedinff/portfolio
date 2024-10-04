// types/cal.d.ts

declare global {
    interface Window {
      Cal?: {
        (...args: any[]): void;
        q?: any[];
        ns?: Record<string, unknown>;
      };
    }
  }
  
  export type CalApi = {
    (...args: any[]): void;
    q?: any[];
    ns?: Record<string, unknown>;
  };
  
  declare module "@calcom/embed-react" {
    export function getCalApi(): Promise<CalApi>;
  }