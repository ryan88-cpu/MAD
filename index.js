/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import Flexbox from "./Flexbox";
import Signin from "./Signin";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Signin);
