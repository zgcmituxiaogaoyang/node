<?php 
$con=mysqli_connect('localhost','root','','myweb');
if (!$con) 
{ 
    die("连接错误: " . mysqli_connect_error()); 
} 
// mysql_select_db('myweb');
mysqli_query($con,'set names utf8');
$id=$_GET['id'];
$sql="delete from user where id={$id}";
$result=mysqli_query($con,$sql);
if($result){
	echo 1;
}
mysqli_close($con);


?>