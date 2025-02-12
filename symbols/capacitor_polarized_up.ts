import { modifySymbol } from "../drawing/modify-symbol/modify-symbol"
import svgJson from "./capacitor_polarized_right"

export default modifySymbol(svgJson)
  .changeTextAnchor("{VAL}", "middle_top")
  .rotateRightFacingSymbol("up")
  .labelPort("left1", ["1"])
  .labelPort("right1", ["2"])
  .changeTextAnchor("{REF}", "middle_right")
  .build()
