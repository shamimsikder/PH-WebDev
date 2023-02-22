let data = [
    {
      pHeroCourses: {
        "course-x": "web development"
      }
    },
    {
      pHeroCourses: {
        "course-y": "phitron"
      }
    },
    {
      pHeroCourses: {
        "course-z": "acc"
      }
    },
    {
      pHeroCourses: {
        "course-xyz": "level-2"
      },
      locationField: {
        "en-US": {
          lat: 19.28563,
          lon: 72.8691
        }
      }
    }
  ];

const p1 = data[3].pHeroCourses['course-xyz']
const p2 = data[3].locationField['en-US'].lon

  console.log(p1)
  console.log(p2)