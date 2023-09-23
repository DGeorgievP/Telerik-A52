//@ts-check

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
        }
      ]
  }

/**
 * 
 * @param {*} pathObj 
 * @returns string
 */
const traverseDirectories = (pathObj) => {
    if (pathObj.type === 'file') {
        return pathObj.name;
    }

    const lines = [pathObj.name];

    for (const obj of pathObj.content) {
        lines.push(obj.name);
        if (obj.type === 'directory') {
            for (const subObj of obj.content) {
                lines.push(traverseDirectories(subObj));
            }
        }
    }

    return lines.join('\n');
};

console.log(traverseDirectories(hardDisk));