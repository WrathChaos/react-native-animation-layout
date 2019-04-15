import { LayoutAnimation } from "react-native";

function setAnimationType(animationType) {
  if (animationType) {
    switch (animationType) {
      case "opacity":
        return LayoutAnimation.Properties.opacity;
      case "scaleXY":
        return LayoutAnimation.Properties.scaleXY;
      default:
        return LayoutAnimation.Properties.opacity;
    }
  }
  return LayoutAnimation.Properties.opacity;
}

// Spring
export function CustomLayoutSpring(duration, springDamping, animationType) {
  return {
    duration: duration || 700,
    create: {
      type: LayoutAnimation.Types.spring,
      property: setAnimationType(animationType),
      springDamping: springDamping || 0.7
    },
    update: {
      type: LayoutAnimation.Types.spring,
      property: setAnimationType(animationType),
      springDamping: springDamping || 0.7
    },
    delete: {
      type: LayoutAnimation.Types.spring,
      property: setAnimationType(animationType),
      springDamping: springDamping || 0.7
    }
  };
}

// Linear with easing
export function CustomLayoutLinear(duration, animationType) {
  return {
    duration: duration || 500,
    create: {
      type: LayoutAnimation.Types.linear,
      property: setAnimationType(animationType)
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
      property: setAnimationType(animationType)
    },
    delete: {
      type: LayoutAnimation.Types.linear,
      property: setAnimationType(animationType)
    }
  };
}

// Animation Type : EaseIn
export function CustomLayoutEaseIn(duration, animationType) {
  return {
    duration: duration || 500,
    create: {
      type: LayoutAnimation.Types.easeIn,
      property: setAnimationType(animationType)
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
      property: setAnimationType(animationType)
    },
    delete: {
      type: LayoutAnimation.Types.easeIn,
      property: setAnimationType(animationType)
    }
  };
}

// Animation Type : EaseOut
export function CustomLayoutEaseOut(duration, animationType) {
  return {
    duration: duration || 500,
    create: {
      type: LayoutAnimation.Types.easeOut,
      property: setAnimationType(animationType)
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
      property: setAnimationType(animationType)
    },
    delete: {
      type: LayoutAnimation.Types.easeOut,
      property: setAnimationType(animationType)
    }
  };
}

// Animation Type : EaseInEaseOut
export function CustomLayoutEaseInEaseOut(duration, animationType) {
  return {
    duration: duration || 500,
    create: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
      property: setAnimationType(animationType)
    },
    update: {
      type: LayoutAnimation.Types.spring,
      property: setAnimationType(animationType)
    },
    delete: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
      property: setAnimationType(animationType)
    }
  };
}

// Animation Type : Keyboard
export function CustomLayoutKeyboard(duration, animationType) {
  return {
    duration: duration || 500,
    create: {
      type: LayoutAnimation.Types.keyboard,
      property: setAnimationType(animationType)
    },
    update: {
      type: LayoutAnimation.Types.spring,
      property: setAnimationType(animationType)
    },
    delete: {
      type: LayoutAnimation.Types.keyboard,
      property: setAnimationType(animationType)
    }
  };
}
