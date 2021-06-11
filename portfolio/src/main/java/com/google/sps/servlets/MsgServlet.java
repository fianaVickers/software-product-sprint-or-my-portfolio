package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



/** Handles requests sent to the /randMsg URL **/
@WebServlet("/randMsg")
public class MsgServlet extends HttpServlet {

//An Array list of video games I have played
String[] videoGames = new String[]{"Minecraft", "Overwatch", "Pac-man" };

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //response.setContentType("text/html;");
    response.getWriter().println("This is my first Servlet file :D");

    String json = convertToJson(videoGames);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
 
  }

  /**
   * Converts a ServerStats instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(String[] videoGameArr) {
    String json = "{";
    json += "\"Video Game1\": ";
    json += "\"" + videoGameArr[0] + "\"";
    json += ", ";
    json += "\"Video Game2\": ";
    json += "\"" + videoGameArr[1] + "\"";
    json += ", ";
    json += "\"Video Game3\": ";
    json += videoGameArr[2];
    json += "}";
    return json;
  }
}

