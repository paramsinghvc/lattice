import { TypographyProps, SpaceProps, ColorProps, PositionProps, LayoutProps, FlexboxProps, BorderProps, ResponsiveValue, ShadowProps } from 'styled-system';
export declare const BREAKPOINTS: {
    xs: number;
    sm: string;
    md: string;
    lg: string;
};
export declare type StyledSystemProps = TypographyProps & SpaceProps & ColorProps & PositionProps & LayoutProps & FlexboxProps;
export declare const GridBase: import("styled-components").StyledComponent<"section", any, StyledSystemProps, never>;
export declare const CellBase: import("styled-components").StyledComponent<"div", any, StyledSystemProps, never>;
export declare type BoxProps = StyledSystemProps & BorderProps & PositionProps & ShadowProps;
export declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
declare type StyledGridProps = {
    gap: ResponsiveValue<string>;
    rowGap: ResponsiveValue<string>;
    columnGap: ResponsiveValue<string>;
    alignItems: ResponsiveValue<string>;
    alignContent: ResponsiveValue<string>;
    justifyItems: ResponsiveValue<string>;
    justifyContent: ResponsiveValue<string>;
    cols: ResponsiveValue<number | string>;
    rows: ResponsiveValue<number | string>;
    flow: ResponsiveValue<string>;
    areas: ResponsiveValue<string[]>;
};
export declare const Grid: import("styled-components").StyledComponent<"section", any, TypographyProps<Required<import("styled-system").Theme<string | number>>> & SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & PositionProps<Required<import("styled-system").Theme<string | number>>> & LayoutProps<Required<import("styled-system").Theme<string | number>>> & FlexboxProps<Required<import("styled-system").Theme<string | number>>> & Partial<StyledGridProps>, never>;
declare type CellProps = {
    area: ResponsiveValue<string>;
    'x-offset': ResponsiveValue<string>;
    'x-span': ResponsiveValue<string>;
    'y-offset': ResponsiveValue<string>;
    'y-span': ResponsiveValue<string>;
};
export declare const Cell: import("styled-components").StyledComponent<"div", any, TypographyProps<Required<import("styled-system").Theme<string | number>>> & SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & PositionProps<Required<import("styled-system").Theme<string | number>>> & LayoutProps<Required<import("styled-system").Theme<string | number>>> & FlexboxProps<Required<import("styled-system").Theme<string | number>>> & Partial<CellProps>, never>;
export {};
