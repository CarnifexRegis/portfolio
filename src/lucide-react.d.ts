declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type Icon = FC<IconProps>;
  export const X: Icon;
  export const ExternalLink: Icon;
  export const Play: Icon;
  export const ArrowUpRight: Icon;
  // Add other icons as needed
}
