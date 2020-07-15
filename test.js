const { TabixIndexedFile } = require("@gmod/tabix");

const tbiIndexed = new TabixIndexedFile({
  path: "trio.vcf.gz",
  tbiPath: "trio.vcf.gz.tbi",
});
const lines = [];
(async () => {
  await tbiIndexed.getLines("20", 0, 100000, function (line, fileOffset) {
    console.log(line);
    lines.push(line);
  });
})();
