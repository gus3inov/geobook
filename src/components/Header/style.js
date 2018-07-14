import { blackColor, redColor } from "../../styles/colors";

export default {
  container: {
    backgroundColor: blackColor,
    overflow: "visible"
  },
  logoButton: {
    backgroundColor: redColor,
    borderRadius: 100,
    width: 60,
    height: 60,
    marginLeft: 90
  },
  logoText: {
    fontSize: 14
  },
  leftButton: {
    zIndex: 1
  },
  pulseView: {
    position: "relative",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "red",
    borderRadius: 30
  },
  pulseButton: {
    position: "relative",
    bottom: 0
  },
  pulseText: {
    color: "#fff"
  }
};
