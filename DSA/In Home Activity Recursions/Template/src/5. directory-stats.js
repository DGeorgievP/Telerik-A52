const hardDisk = {
  "name": "C:",
  "type": "directory",
  "content":
    [
      {
        "name": "Images",
        "type": "directory",
        "content": [
          {
            "name": "img1.png",
            "type": "file",
            "content": null
          },
          {
            "name": "img2.png",
            "type": "file",
            "content": null
          },
          {
            "name": "Album 1",
            "type": "directory",
            "content": [
              {
                "name": "img3.png",
                "type": "file",
                "content": null
              },
              {
                "name": "img4.png",
                "type": "file",
                "content": null
              },
              {
                "name": "Album 1.1",
                "type": "directory",
                "content": [
                  {
                    "name": "img5.png",
                    "type": "file",
                    "content": null
                  },
                  {
                    "name": "img6.png",
                    "type": "file",
                    "content": null
                  },
                ]
              }
            ]
          },
          {
            "name": "Album 2",
            "type": "directory",
            "content": [
              {
                "name": "img7.png",
                "type": "file",
                "content": null
              },
            ]
          }
        ]
      },
      {
        "name": "Documents",
        "type": "directory",
        "content": [
          {
            "name": "doc1.docx",
            "type": "file",
            "content": null
          },
          {
            "name": "doc2.docx",
            "type": "file",
            "content": null
          }
        ]
      }
    ]
}

const getDirectoryStats = (pathObj) => {
  // code goes here
}

const stats = getDirectoryStats(hardDisk);
console.log(stats);