import React, { useState } from "react";

function addTweet(newTweet){
    const [input,showTweet]="react".React.useState({});
    showTweet(prevTweet => {
      return [newTweet, ...prevTweet];
  });
}
