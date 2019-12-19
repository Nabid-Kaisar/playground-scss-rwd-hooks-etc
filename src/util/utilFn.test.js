import { extractImgName } from "./utilFn.js";

test("extract proper img name from given dir string", () => {
 const sampleStr1 = "/static/media/abaddon_full.50062f25.png";
 const  sampleStr2 = "/static/media/ancient_apparition_full.848da2a4.png";
 const  sampleStr3 = "/static/media/ancient_apparition_full.848da2a4.png_dup";

  expect(extractImgName(sampleStr1)).toBe("abaddon");
  expect(extractImgName(sampleStr2)).toBe("ancient");
  expect(extractImgName(sampleStr3)).toBe("ancient");
});
