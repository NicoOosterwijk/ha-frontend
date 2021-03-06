// Compat needs to be first import
import "../resources/compatibility";
import "../onboarding/ha-onboarding";
import "../resources/ha-style";
import "../resources/roboto";
import "../resources/safari-14-attachshadow-patch";
import "../resources/array.flat.polyfill";

declare global {
  interface Window {
    stepsPromise: Promise<Response>;
  }
}
