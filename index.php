<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>bruh</title>
    <style>
      body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
        font-size: 69px;
      }
      p.txt1 {
        width: 21em;
        border: 1px solid #000000;
        word-wrap: break-word;
      }
      </style>
  </head>
  <body>
  	  <h1>Ok</h1>
    <p class="txt1">Demo website or smth idk</p>
      <div id="container">
  
    <h1>Directory Contents</h1>
    
    <table>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Type</th>
          <th>Size <small>(bytes)</small></th>
          <th>Date Modified</th>
        </tr>
      </thead>
      <tbody>
        <script src="./fileList.php"></script>
      </tbody>
    </table>
 
    <h2><?php print("<a href='$ahref'>$atext hidden files</a>"); ?></h2>
    
  </div>
  </body>
</html>