

class Venue{

  int x, y, size, count, recWidth, recHeight;
  color baseColor, highlightColor;
  String name;
  
  
  Venue(int tx, int ty, int trecWidth, int trecHeight, color tbaseColor, color thighlightColor, String tname, int tcount){
   x              = tx;
   y              = ty; 
   recWidth       = trecWidth;
   recHeight      = trecHeight;
   baseColor      = tbaseColor;
   highlightColor = thighlightColor;
   name           = tname;
   count          = tcount;
 }
 
 void display(){
    ellipseMode(CENTER);
    textSize(24);
       
     overRect();
     text(name, x, y, recWidth, recHeight);
 }
 
 void mousePressed() {  
     click();
     fetchData();
}

 void click(){
   
        
        post.addData("name", name);
        post.addData("client", "processing");
        post.send();
        println("Reponse Content: " + post.getContent());
        println("Reponse Content-Length Header: " + post.getHeader("Content-Length")); 
  

    // }

    
 }
 
 boolean overRect() {
   if (mouseX >= x && mouseX <= x+recWidth && 
       mouseY >= y && mouseY <= y+recHeight) {
     //fill(color(baseColor));
     return true;
   } else {
     //fill(color(highlightColor));
     return false;
   }
 }
 
 
 void fetchData(){
      String searchUrl = "http://antertain.org/processing/venue-data.json";
      JSONObject json = loadJSONObject(searchUrl);
      JSONArray results = json.getJSONArray("venues");
      JSONObject generalResult = results.getJSONObject(0);
      
      JSONObject selectedVenue = generalResult.getJSONObject(name);
      
      nameJSON  = selectedVenue.getString("name");
      date  = selectedVenue.getString("date");
      time  = selectedVenue.getString("time");
      id    = selectedVenue.getString("id");
      cover = selectedVenue.getString("cover");
      
      println("id: " + id + " \n" + name + "\n" + date + " at " + time + "\n" + cover);
  
}

 
   
}