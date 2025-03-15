import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    //Propriedade criada para evitar erro no compilador.
    dummyProperty?: string;
  }
}
