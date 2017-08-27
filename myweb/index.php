<?php
$con=mysqli_connect('localhost','root','','myweb');
if (!$con) 
{ 
    die("连接错误: " . mysqli_connect_error()); 
} 
// mysql_select_db('myweb');
mysqli_query($con,'set names utf8');
$sql="select * from user";
$result=mysqli_query($con,$sql);
mysqli_close($con);
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
	<style type="text/css">
		*{
			font-family: 微软雅黑;
		}
		.container
	</style>
	<link rel="stylesheet" type="text/css" href="bs/css/bootstrap.min.css">
	<script src="bs/js/jquery.min.js"></script>
	<script src="bs/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h2 class="page-header">查看用户：</h2>
		<table class="table table-bordered table-hover">
			<tr>
				<th>编号</th>
				<th>用户名</th>
				<th>密码</th>
				<th>删除</th>
			</tr>
			<?php
			while($row=mysqli_fetch_assoc($result)){
				echo "<tr>";
				echo "<td>{$row['id']}</td>";
				echo "<td>{$row['username']}</td>";
				echo "<td>{$row['password']}</td>";
				echo "<td><a href='javascript:' class='del' id='{$row["id"]}'>删除</a></td>";
				echo "</tr>";
			}
			?>
		</table>
	</div>
	<script type="text/javascript">
		$('.del').click(function(){
			id=this.id;
			obj=$(this);
			$.getJSON('http://localhost:8888?cb=?',{id:id},function(json){
				if(json.ok=='1'){
					obj.parent().parent().hide();
				}
			});
		});

	</script>
</body>
</html>