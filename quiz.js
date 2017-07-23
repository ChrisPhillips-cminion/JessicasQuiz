var sleep = require('sleep').sleep
var color = require('colors');
var read = require('read');
j = 1
totalAnswers = 0
console.log("Queen quiz - by Jessica".bold)
sleep(2)
read({
  prompt: "What is your name?"
}, function(err, answer) {
  console.log("Hello " + answer)
  console.log("")
  console.log(j++ + "\tHow many dogs does the Queen have?".yellow)
  console.log("")
  read({
    prompt: "??"
  }, function(err, answer) {
    if (answer == "30") {
      console.log("Correct!");
    } else {
      console.log("Wrong");
    }
    console.log(j++ + "\tHow many grandchildren does the Queen have?");
    console.log("")
    read({
      prompt: "??"
    }, function(err, answer) {
      if (answer == "8") {
        console.log("Correct!");
      } else {
        console.log("Wrong");
      }
      console.log(j++ + "\tHow many castles does the Queen have?".magenta);
      console.log("")
      read({
        prompt: "??"
      }, function(err, answer) {
        if (answer == "8") {
          console.log("Correct!");
        } else {
          console.log("Wrong");
        }

        console.log(j++ + "\tHow many princesses does the Queen have?".blue);
        console.log("")
        read({
          prompt: "??"
        }, function(err, answer) {
          if (answer == "4") {
            console.log("Correct!");
          } else {
            console.log("Wrong");
          }

          console.log(j++ + "\tHow many types of dogs does the Queen have?".green);
          console.log("")
          read({
            prompt: "??"
          }, function(err, answer) {
            if (answer == "6") {
              console.log("Correct!");
            } else {
              console.log("Wrong");
            }

            console.log(j++ + "\tHow many princes deos the Queen have?".cyan);
            console.log("")
            read({
              prompt: "??"
            }, function(err, answer) {
              if (answer == "5") {
                console.log("Correct!");
              } else {
                console.log("Wrong");
              }

              console.log(j++ + "\tWho is the Queen's Great Great Grandmother?".magenta);
              console.log("")
              read({
                prompt: "??"
              }, function(err, answer) {
                if (answer == "Victoria") {
                  console.log("Correct!");
                } else {
                  console.log("Wrong");
                }
                console.log(j++ + "\tWho is the Queen's Great Grandmother?");
                console.log("")
                read({
                  prompt: "??"
                }, function(err, answer) {
                  if (answer == "Alexandra") {
                    console.log("Correct!");
                  } else {
                    console.log("Wrong");
                  }
                  console.log(j++ + "\tHow old is the Queen?".rainbow.bold);
                  console.log("")
                  read({
                    prompt: "??"
                  }, function(err, answer) {
                    if (answer == "91") {
                      console.log("Correct!");
                    } else {
                      console.log("Wrong");
                    }
                    console.log(j++ + "\thow old was the Queen when she became Queen?".magenta);
                    console.log("")
                    read({
                      prompt: "??"
                    }, function(err, answer) {
                      if (answer == "25") {
                        console.log("Correct!");
                      } else {
                        console.log("Wrong");
                      }
                      console.log(j++ + "\tHow many countries does the Queen rule?".rainbow.bold);
                      console.log("")
                      read({
                        prompt: "??"
                      }, function(err, answer) {
                        if (answer == "16") {
                          console.log("Correct!");
                        } else {
                          console.log("Wrong");
                        }
                        console.log("")

                        console.log(j++ + "\tHow many sister does the Queen have?".magenta);

                        read({
                          prompt: "??"
                        }, function(err, answer) {
                          if (answer == "1") {
                            console.log("Correct!");
                          } else {
                            console.log("Wrong");
                          }
                          console.log(j++ + "\tWho is the Duke of Edinburgh?".magenta);
                          console.log("")
                          read({
                            prompt: "??"
                          }, function(err, answer) {
                            if (answer == "Prince Philip") {
                              console.log("Correct!");
                            } else {
                              console.log("Wrong");
                            }
                            console.log(j++ + "\tHow old was the Queen in May 1926?".magenta);
                            console.log("")
                            read({
                              prompt: "??"
                            }, function(err, answer) {
                              if (answer == "0") {
                                console.log("Correct!");
                              } else {
                                console.log("Wrong");
                              }
                              console.log(j++ + "\tDid George VI like to knit?".magenta);
                              console.log("")
                              read({
                                prompt: "??"
                              }, function(err, answer) {
                                if (answer == "yes") {
                                  console.log("Correct!");
                                } else {
                                  console.log("Wrong");
                                }
                                console.log(j++ + "\tWho did the Queen marry?".magenta);
                                console.log("")
                                read({
                                  prompt: "??"
                                }, function(err, answer) {
                                  if (answer == "Prince Philip") {
                                    console.log("Correct!");
                                  } else {
                                    console.log("Wrong");
                                  }
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
