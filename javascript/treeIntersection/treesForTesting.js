"use strict";
const Node = require("./Node");
const BinaryTree = require("./binaryTree");

let one = new Node("150");
let TWO = new Node("75");
let THREE = new Node("100");
let four = new Node("160");
let five = new Node("125");
let six = new Node("200");
let seven = new Node("175");
let eight = new Node("350");
let nine = new Node("250");
let ten = new Node("300");
let elevn = new Node("500");

const tree1 = new BinaryTree();
tree1.root = one;
one.left = THREE;
one.right = nine;
nine.left = six;
nine.right = eight;
eight.right = elevn;
eight.left = ten;

THREE.left = TWO;
THREE.right = four;
four.left = five;
four.right = seven;

const tree2 = new BinaryTree();

let one1 = new Node("42");
let TWO1 = new Node("15");
let THREE1 = new Node("100");
let four1 = new Node("160");
let five1 = new Node("125");
let six1 = new Node("200");
let seven1 = new Node("175");
let eight1 = new Node("350");
let nine1 = new Node("600");
let ten1 = new Node("4");
let elevn1 = new Node("500");

tree2.root = one1;
one1.left = THREE1;
one1.right = nine1;
nine1.left = six1;
nine1.right = eight1;
eight1.right = elevn1;
eight1.left = ten1;

THREE1.left = TWO1;
THREE1.right = four1;
four1.left = five1;
four1.right = seven1;


let one3 = new Node("1");
let TWO3 = new Node("2");
let THREE3 = new Node("3");
let four3 = new Node("4");
let five3 = new Node("5");
let six3 = new Node("6");
let seven3 = new Node("7");
let eight3 = new Node("8");
let nine3= new Node("9");
let ten3 = new Node("10");
let elevn3 = new Node("11");

const tree3 = new BinaryTree();
tree3.root = one3;
one3.left = THREE3;
one3.right = nine3;
nine3.left = six3;
nine3.right = eight3;
eight3.right = elevn3;
eight3.left = ten3;

THREE3.left = TWO3;
THREE3.right = four3;
four3.left = five3;
four3.right = seven3;

const tree4 = new BinaryTree();

let one4 = new Node("100");
let TWO4 = new Node("200");
let THREE4 = new Node("300");
let four4 = new Node("400");
let five4 = new Node("500");
let six4 = new Node("600");
let seven4 = new Node("700");
let eight4 = new Node("800");
let nine4 = new Node("900");
let ten4 = new Node("1000");
let elevn4 = new Node("1100");

tree4.root = one4;
one4.left = THREE4;
one4.right = nine4;
nine4.left = six4;
nine4.right = eight4;
eight4.right = elevn4;
eight4.left = ten4;

THREE4.left = TWO4;
THREE4.right = four4;
four4.left = five4;
four4.right = seven4;

const tree5 = new BinaryTree();

let one5 = new Node("10");
let TWO5 = new Node("20");
let THREE5 = new Node("30");
let four5 = new Node("40");
let five5 = new Node("50");
let six5 = new Node("60");
let seven5 = new Node("70");
let eight5 = new Node("80");
let nine5 = new Node("90");
let ten5 = new Node("111");
let elevn5 = new Node("120");

tree5.root = one5;
one5.left = THREE5;
one5.right = nine5;
nine5.left = six5;
nine5.right = eight5;
eight5.right = elevn5;
eight5.left = ten5;

THREE5.left = TWO5;
THREE5.right = four5;
four5.left = five5;
four5.right = seven5;


const tree6 = new BinaryTree();

let one6 = new Node("11111");
let TWO6 = new Node("6111111111115");
let THREE6 = new Node("6222222200");
let four6 = new Node("66330");
let five6 = new Node("6225");
let six6 = new Node("20220");
let seven6 = new Node("672225");
let eight6 = new Node("35220");
let nine6 = new Node("601110");
let ten6 = new Node("3123126");
let elevn6 = new Node("50212310");

tree6.root = one6;
one6.left = THREE6;
one6.right = nine6;
nine6.left = six6;
nine6.right = eight6;
eight6.right = elevn6;
eight6.left = ten6;

THREE6.left = TWO6;
THREE6.right = four6;
four6.left = five6;
four6.right = seven6;














// const tree1 = new BinaryTree();
// tree1.root = new Node("150");
// tree1.root.left = new Node("100");
// tree1.root.left.left = new Node("75");
// tree1.root.left.right = new Node("160");
// tree1.root.left.right.left = new Node("125");
// tree1.root.left.right.right = new Node("175");
// tree1.root.right = new Node("350");
// tree1.root.right.left = new Node("300");
// tree1.root.right.right = new Node("500");

// const tree2 = new BinaryTree();
// tree2.root = new Node("42");
// tree2.root.left = new Node("100");
// tree2.root.left.left = new Node("15");
// tree2.root.left.right = new Node("160");
// tree2.root.left.right.left = new Node("125");
// tree2.root.left.right.right = new Node("175");
// tree2.root.right = new Node("600");
// tree2.root.right.left = new Node("4");
// tree2.root.right.right = new Node("500");

// const tree3 = new BinaryTree();
// tree3.root = new Node("1");
// tree3.root.left = new Node("2");
// tree3.root.left.left = new Node("3");
// tree3.root.left.right = new Node("4");
// tree3.root.left.right.left = new Node("67");
// tree3.root.left.right.right = new Node("5");
// tree3.root.right = new Node("8");
// tree3.root.right.left = new Node("111");
// tree3.root.right.right = new Node("1111");

// const tree4 = new BinaryTree();
// tree4.root = new Node("32");
// tree4.root.left = new Node("43");
// tree4.root.left.left = new Node("54");
// tree4.root.left.right = new Node("65");
// tree4.root.left.right.left = new Node("76");
// tree4.root.left.right.right = new Node("87");
// tree4.root.right = new Node("98");
// tree4.root.right.left = new Node("09");
// tree4.root.right.right = new Node("41");

// const tree5 = new BinaryTree();
// tree5.root = new Node("150");
// tree5.root.left = new Node("100");
// tree5.root.left.left = new Node("75");
// tree5.root.left.right = new Node("160");
// tree5.root.left.right.left = new Node("125");
// tree5.root.left.right.right = new Node("175");
// tree5.root.right = new Node("350");
// tree5.root.right.left = new Node("300");
// tree5.root.right.right = new Node("500");

// const tree6 = new BinaryTree();
// tree6.root = new Node("42");
// tree6.root.left = new Node("10");
// tree6.root.left.left = new Node("5");
// tree6.root.left.right = new Node("20");
// tree6.root.left.right.left = new Node("15");
// tree6.root.left.right.right = new Node("25");
// tree6.root.right = new Node("60");
// tree6.root.right.left = new Node("4");
// tree6.root.right.right = new Node("50");

module.exports = {
  tree1,
  tree2,
  tree3,
  tree4,
  tree5,
  tree6,
};
