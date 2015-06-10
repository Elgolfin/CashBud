<?php
	require "dataprocess.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title> SmartForms </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" />
    <link rel="stylesheet" href="http://cdn.datatables.net/tabletools/2.2.2/css/dataTables.tableTools.css" />
    <link rel="stylesheet" href="css/tables-custom.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
    <script src="http://cdn.datatables.net/tabletools/2.2.2/js/dataTables.tableTools.min.js"></script>
    <script>
		$(document).ready( function () {
			$('#sfTable').dataTable( {
				"dom": 'T<"clear">lfrtip',
				"tableTools": {
					"sSwfPath": "http://cdn.datatables.net/tabletools/2.2.2/swf/copy_csv_xls_pdf.swf"
				}
			});
		});		
    </script>    
</head>
<body>
    <div class="sftables">
    	<div class="dwnload"><a href="../formcsv.csv?v=v1"> Download CSV</a></div>
    	<div class="sftable-wrap">
        	<?php echo csvTable(); ?>
        </div>        
    </div>    
</body>
</html>