module.exports = function(chunksTotal, { node }) {
  const {
    fields: { slug },
    frontmatter: { title },
    internal: { content }
  } = node;

  const noEmojiContent = content.replace(/<img class="emoji-icon".+\/>/g, "");
  const noVideos = noEmojiContent.replace(/<video.+>|<source.+\/>|<\/video>/g, "");
  const noCode = noVideos.replace(/```javascript[\s\S]+```/gm, "")

  const contentChunks = chunkString(noCode, 9000);
  const record = { title, slug, content };
  const recordChunks = contentChunks.reduce((recordChunksTotal, contentChunksItem, idx) => {
    return [
      ...recordChunksTotal,
      { ...record, ...{ content: contentChunksItem }, objectID: `${slug}${idx}` }
    ];
  }, []);

  const recordChunks_2 = recordChunks.filter((entry)=>{return entry.title !== 'Success' && entry.title !== 'About Me' && entry.title !== 'Projects'})

  return [...chunksTotal, ...recordChunks_2];
};

function chunkString(str, length) {
  return str.match(new RegExp("(.|[\r\n]){1," + length + "}", "g"));
}
