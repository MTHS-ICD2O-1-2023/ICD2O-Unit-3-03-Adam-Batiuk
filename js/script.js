// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //input
  const radius = parseInt(document.getElementById("radius").value)
  //proses
  const volume = 4/3 * Math.PI * radius ** 3
  const roundVloume = Math.round(volume * 100) / 100
  //output
  document.getElementById("answer").innerHTML = "Volume is: " + roundVloume + "mm³"
}