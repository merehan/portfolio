

//mobile nav menu

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

//animated black logo

var RheroSvgData =
  // Paste Your JSON lottie Code Here
  {
    "v": "5.5.7",
    "meta": {
      "g": "LottieFiles AE 0.1.20",
      "a": "Merehan Suhiel Elamrosy",
      "k": "personal logo",
      "d": "My own logo first initials of my first and last names",
      "tc": "none"
    },
    "fr": 60,
    "ip": 0,
    "op": 152,
    "w": 600,
    "h": 337,
    "nm": "Comp 1",
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "logo Outlines",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [300, 168.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [298, 155, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [41.13, 1.179],
                [-41.023, -1.125]
              ],
              "o": [
                [-41.483, 1.197],
                [40.668, -1.105]
              ],
              "v": [
                [0.177, 29.516],
                [0.177, -29.589]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0],
                "y": [1]
              },
              "o": {
                "x": [0.333],
                "y": [0]
              },
              "t": 60,
              "s": [0]
            }, {
              "t": 120,
              "s": [100]
            }],
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "d": [{
            "n": "d",
            "nm": "dash",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 1
            }
          }, {
            "n": "g",
            "nm": "gap",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0],
                  "y": [-0.476]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [28]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 2
            }
          }, {
            "n": "d",
            "nm": "dash2",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [1.028]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [3]
              }, {
                "i": {
                  "x": [0.667],
                  "y": [0.999]
                },
                "o": {
                  "x": [0.333],
                  "y": [0.001]
                },
                "t": 57.5,
                "s": [62]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 3
            }
          }, {
            "n": "o",
            "nm": "offset",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 7
            }
          }],
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 1,
            "k": [{
              "i": {
                "x": 0.773,
                "y": 0
              },
              "o": {
                "x": 0.349,
                "y": 0
              },
              "t": 0,
              "s": [545.899, 222.175],
              "to": [-12.448, 0],
              "ti": [15.541, 0]
            }, {
              "i": {
                "x": 0,
                "y": 0.657
              },
              "o": {
                "x": 0.321,
                "y": 0.035
              },
              "t": 116,
              "s": [462.239, 222.862],
              "to": [-0.25, 0],
              "ti": [1.842, 0.182]
            }, {
              "i": {
                "x": 0.937,
                "y": 0
              },
              "o": {
                "x": 0.063,
                "y": 1
              },
              "t": 123,
              "s": [455.558, 221.823],
              "to": [-1.629, -0.161],
              "ti": [0.18, 0]
            }, {
              "i": {
                "x": 0,
                "y": 1
              },
              "o": {
                "x": 0,
                "y": 0
              },
              "t": 133,
              "s": [454.841, 222.175],
              "to": [-0.035, 0],
              "ti": [0.034, 0]
            }, {
              "t": 152,
              "s": [468.738, 222.175]
            }],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0, 0],
                "y": [0.968, 1.216]
              },
              "o": {
                "x": [0.333, 0.333],
                "y": [0, 0]
              },
              "t": 117.5,
              "s": [100, 100]
            }, {
              "i": {
                "x": [0, 0],
                "y": [0.987, 1.088]
              },
              "o": {
                "x": [0.333, 0.333],
                "y": [-0.004, 0.027]
              },
              "t": 137.5,
              "s": [75.033, 103.757]
            }, {
              "t": 145,
              "s": [100, 100]
            }],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 1",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [3.851, -62.276],
                [0, 0],
                [0, 0],
                [5.164, -68.674],
                [17.771, 151.623],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [51.202, 3.089],
                [0.004, -0.001],
                [0, 0],
                [53.338, 4.796],
                [-180.896, 16.896],
                [0.011, 0.007],
                [0, 0]
              ],
              "v": [
                [87.87, -55.444],
                [26.87, -55.444],
                [26.87, -32.444],
                [80.866, 12.557],
                [26.87, 12.556],
                [26.87, 39.556],
                [87.866, 86.555],
                [-27.141, -103.451],
                [87.87, -103.444]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "d": [{
            "n": "d",
            "nm": "dash",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 1
            }
          }, {
            "n": "g",
            "nm": "gap",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [0.864]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [100]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 2
            }
          }, {
            "n": "d",
            "nm": "dash2",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [1.019]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [1]
              }, {
                "i": {
                  "x": [0.667],
                  "y": [0.999]
                },
                "o": {
                  "x": [0.333],
                  "y": [0.001]
                },
                "t": 57.5,
                "s": [90]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 3
            }
          }],
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0],
                "y": [1]
              },
              "o": {
                "x": [0.333],
                "y": [0]
              },
              "t": 60,
              "s": [0]
            }, {
              "t": 120,
              "s": [100]
            }],
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [342.63, 162.944],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 2",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 2,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-104, -95],
                [-37.477, -95],
                [0.642, 19.054],
                [37.782, -95],
                [104, -95],
                [104, 95],
                [50, 95],
                [50, 0.268],
                [23.366, 95],
                [-23.487, 95],
                [-50, 0.268],
                [-50, 95],
                [-104, 95]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "d": [{
            "n": "d",
            "nm": "dash",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 1
            }
          }, {
            "n": "g",
            "nm": "gap",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [0.864]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [100]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 2
            }
          }, {
            "n": "d",
            "nm": "dash2",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [1.019]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [1]
              }, {
                "i": {
                  "x": [0.667],
                  "y": [0.999]
                },
                "o": {
                  "x": [0.333],
                  "y": [0.001]
                },
                "t": 57.5,
                "s": [90]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 3
            }
          }],
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [0, 0, 0, 1],
            "ix": 4
          },
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0],
                "y": [1]
              },
              "o": {
                "x": [0.333],
                "y": [0]
              },
              "t": 60,
              "s": [0]
            }, {
              "t": 120,
              "s": [100]
            }],
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [200.5, 154.5],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 3",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 3,
        "mn": "ADBE Vector Group",
        "hd": false
      }],
      "ip": 0,
      "op": 152,
      "st": 0,
      "bm": 0
    }],
    "markers": []
  };

var SvgIcon = document.getElementById('black-logo');


var animation = lottie.loadAnimation({
  container: SvgIcon,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: RheroSvgData
});


// animated white logo

var WhiteData =
  // Paste Your JSON lottie Code Here
  {
    "v": "5.5.7",
    "meta": {
      "g": "LottieFiles AE 0.1.20",
      "a": "Merehan Suhiel Elamrosy",
      "k": "personal logo",
      "d": "My own logo first initials of my first and last names",
      "tc": "none"
    },
    "fr": 60,
    "ip": 0,
    "op": 152,
    "w": 600,
    "h": 337,
    "nm": "Comp 1",
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "logo Outlines",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [300, 168.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [298, 155, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [41.13, 1.179],
                [-41.023, -1.125]
              ],
              "o": [
                [-41.483, 1.197],
                [40.668, -1.105]
              ],
              "v": [
                [0.177, 29.516],
                [0.177, -29.589]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0],
                "y": [1]
              },
              "o": {
                "x": [0.333],
                "y": [0]
              },
              "t": 60,
              "s": [0]
            }, {
              "t": 120,
              "s": [100]
            }],
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "d": [{
            "n": "d",
            "nm": "dash",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 1
            }
          }, {
            "n": "g",
            "nm": "gap",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0],
                  "y": [-0.476]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [28]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 2
            }
          }, {
            "n": "d",
            "nm": "dash2",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [1.028]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [3]
              }, {
                "i": {
                  "x": [0.667],
                  "y": [0.999]
                },
                "o": {
                  "x": [0.333],
                  "y": [0.001]
                },
                "t": 57.5,
                "s": [62]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 3
            }
          }, {
            "n": "o",
            "nm": "offset",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 7
            }
          }],
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 1,
            "k": [{
              "i": {
                "x": 0.773,
                "y": 0
              },
              "o": {
                "x": 0.349,
                "y": 0
              },
              "t": 0,
              "s": [545.899, 222.175],
              "to": [-12.448, 0],
              "ti": [15.541, 0]
            }, {
              "i": {
                "x": 0,
                "y": 0.657
              },
              "o": {
                "x": 0.321,
                "y": 0.035
              },
              "t": 116,
              "s": [462.239, 222.862],
              "to": [-0.25, 0],
              "ti": [1.842, 0.182]
            }, {
              "i": {
                "x": 0.937,
                "y": 0
              },
              "o": {
                "x": 0.063,
                "y": 1
              },
              "t": 123,
              "s": [455.558, 221.823],
              "to": [-1.629, -0.161],
              "ti": [0.18, 0]
            }, {
              "i": {
                "x": 0,
                "y": 1
              },
              "o": {
                "x": 0,
                "y": 0
              },
              "t": 133,
              "s": [454.841, 222.175],
              "to": [-0.035, 0],
              "ti": [0.034, 0]
            }, {
              "t": 152,
              "s": [468.738, 222.175]
            }],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0, 0],
                "y": [0.968, 1.216]
              },
              "o": {
                "x": [0.333, 0.333],
                "y": [0, 0]
              },
              "t": 117.5,
              "s": [100, 100]
            }, {
              "i": {
                "x": [0, 0],
                "y": [0.987, 1.088]
              },
              "o": {
                "x": [0.333, 0.333],
                "y": [-0.004, 0.027]
              },
              "t": 137.5,
              "s": [75.033, 103.757]
            }, {
              "t": 145,
              "s": [100, 100]
            }],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 1",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [3.851, -62.276],
                [0, 0],
                [0, 0],
                [5.164, -68.674],
                [17.771, 151.623],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [51.202, 3.089],
                [0.004, -0.001],
                [0, 0],
                [53.338, 4.796],
                [-180.896, 16.896],
                [0.011, 0.007],
                [0, 0]
              ],
              "v": [
                [87.87, -55.444],
                [26.87, -55.444],
                [26.87, -32.444],
                [80.866, 12.557],
                [26.87, 12.556],
                [26.87, 39.556],
                [87.866, 86.555],
                [-27.141, -103.451],
                [87.87, -103.444]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "d": [{
            "n": "d",
            "nm": "dash",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 1
            }
          }, {
            "n": "g",
            "nm": "gap",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [0.864]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [100]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 2
            }
          }, {
            "n": "d",
            "nm": "dash2",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [1.019]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [1]
              }, {
                "i": {
                  "x": [0.667],
                  "y": [0.999]
                },
                "o": {
                  "x": [0.333],
                  "y": [0.001]
                },
                "t": 57.5,
                "s": [90]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 3
            }
          }],
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0],
                "y": [1]
              },
              "o": {
                "x": [0.333],
                "y": [0]
              },
              "t": 60,
              "s": [0]
            }, {
              "t": 120,
              "s": [100]
            }],
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [342.63, 162.944],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 2",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 2,
        "mn": "ADBE Vector Group",
        "hd": false
      }, {
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "o": [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              "v": [
                [-104, -95],
                [-37.477, -95],
                [0.642, 19.054],
                [37.782, -95],
                [104, -95],
                [104, 95],
                [50, 95],
                [50, 0.268],
                [23.366, 95],
                [-23.487, 95],
                [-50, 0.268],
                [-50, 95],
                [-104, 95]
              ],
              "c": true
            },
            "ix": 2
          },
          "nm": "Path 1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ty": "st",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 3
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 4
          },
          "w": {
            "a": 0,
            "k": 1,
            "ix": 5
          },
          "lc": 1,
          "lj": 1,
          "ml": 10,
          "bm": 0,
          "d": [{
            "n": "d",
            "nm": "dash",
            "v": {
              "a": 0,
              "k": 0,
              "ix": 1
            }
          }, {
            "n": "g",
            "nm": "gap",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [0.864]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [100]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 2
            }
          }, {
            "n": "d",
            "nm": "dash2",
            "v": {
              "a": 1,
              "k": [{
                "i": {
                  "x": [0.667],
                  "y": [1.019]
                },
                "o": {
                  "x": [0.333],
                  "y": [0]
                },
                "t": 0,
                "s": [1]
              }, {
                "i": {
                  "x": [0.667],
                  "y": [0.999]
                },
                "o": {
                  "x": [0.333],
                  "y": [0.001]
                },
                "t": 57.5,
                "s": [90]
              }, {
                "t": 60,
                "s": [0]
              }],
              "ix": 3
            }
          }],
          "nm": "Stroke 1",
          "mn": "ADBE Vector Graphic - Stroke",
          "hd": false
        }, {
          "ty": "fl",
          "c": {
            "a": 0,
            "k": [1, 1, 1, 1],
            "ix": 4
          },
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0],
                "y": [1]
              },
              "o": {
                "x": [0.333],
                "y": [0]
              },
              "t": 60,
              "s": [0]
            }, {
              "t": 120,
              "s": [100]
            }],
            "ix": 5
          },
          "r": 1,
          "bm": 0,
          "nm": "Fill 1",
          "mn": "ADBE Vector Graphic - Fill",
          "hd": false
        }, {
          "ty": "tr",
          "p": {
            "a": 0,
            "k": [200.5, 154.5],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [100, 100],
            "ix": 3
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 6
          },
          "o": {
            "a": 0,
            "k": 100,
            "ix": 7
          },
          "sk": {
            "a": 0,
            "k": 0,
            "ix": 4
          },
          "sa": {
            "a": 0,
            "k": 0,
            "ix": 5
          },
          "nm": "Transform"
        }],
        "nm": "Group 3",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 3,
        "mn": "ADBE Vector Group",
        "hd": false
      }],
      "ip": 0,
      "op": 152,
      "st": 0,
      "bm": 0
    }],
    "markers": []
  };

var whiteLogo = document.getElementById('white-logo');


var animation = lottie.loadAnimation({
  container: whiteLogo,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: WhiteData
});

// code for adding json file directly

//var logo = document.getElementById("white-logo");
//  
//var animation = lottie.loadAnimation({
//  container: logo,// Required
//  renderer: 'svg', // Required
//  loop: false, // Optional
//  autoplay: true, // Optional
//  name: "logo", // Name for future reference. Optional.
//  prerender: true,
//  path: 'logo-data/logo.json', // Required
//	
//});

//animation.addEventListener('DOMLoaded', function(){
//logo.addEventListener("mouseover", function(){ animation.play(); });
//}	  
//logo.addEventListener("mouseover", function () {
//animation.play();
//});
//
//logo.addEventListener("mouseleave", function () {
//animation.stop();
//});

// Shuffle js filter and masonry
var Shuffle = window.Shuffle;
var jQuery = window.jQuery;

var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
  itemSelector: '.shuffle-item',
  buffer: 1
});

jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
  var input = evt.currentTarget;
  if (input.checked) {
    myShuffle.filter(input.value);
  }
})(jQuery);


//Get the button:
// mybutton = document.getElementById("myBtn-up");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//    mybutton.style.display = "block";
//  } else {
//    mybutton.style.display = "none";
//  }
//}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//  document.body.scrollTop = 0; // For Safari
//  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//} 