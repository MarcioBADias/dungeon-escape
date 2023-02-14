export const TileSize = 19;
export const GameSize = 20*TileSize;

export const SmallSize = TileSize*3;

export const MediumSize = 4;
export const MediumSizeWidth = TileSize*MediumSize
export const MediumSizePosition = TileSize-MediumSize;
export const MediumSizeHeight = TileSize+MediumSize;

export const LargeSize = 8;
export const LargeTileSize = TileSize*2;
export const LargeSizeWidth = TileSize*LargeSize;

export const FL = 0;
export const WL = 1;
export const DR = 2;
export const TR = 3;
export const MM = 4;
export const BM = 5;
export const CH = 6;
export const HE = 7;

export const gridRules = [
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL],
    [WL,FL,FL,WL,CH,FL,TR,FL,WL,CH,FL,FL,FL,DR,DR,FL,WL,FL,CH,WL],
    [WL,FL,FL,WL,FL,BM,FL,FL,WL,FL,FL,FL,FL,FL,FL,FL,WL,FL,FL,WL],
    [WL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,TR,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,TR,FL,FL,FL,MM,MM,FL,CH,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MM,MM,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,TR,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,HE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL]
];
