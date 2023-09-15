<?php 
 // open this directory 
$myDirectory = opendir(".");

// get each entry
while($entryName = readdir($myDirectory)) {
 $dirArray[] = $entryName;
}

// close directory
closedir($myDirectory);

// count elements in array
$indexCount = count($dirArray);
Print ("$indexCount files<br>\n");

// sort 'em
sort($dirArray);

// print 'em
// loop through the array of files and print them all
for($index=0; $index < $indexCount; $index++) {
        if (substr("$dirArray[$index]", 0, 1) != "."){ // don't list hidden files
  print $dirArray[$index];
  print("<br>\n");
 }
}
 ?>