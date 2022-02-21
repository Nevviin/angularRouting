using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors(configurePolicy: cor =>
    {
        cor.AllowAnyOrigin();
        cor.AllowAnyHeader();
    });
    app.UseSwagger();
    app.UseSwaggerUI();
}



//app.MapPost("/signIn", (User user) =>
//{
//    if (user.UserName == "user" && user.Password =="pwd")
//    {
      
//      return new UserDetails { Country = "Australia", State = "NSW", UserName = user.UserName };
//    }
//    else
//    {
//        return new OkResult("InValid Credentails");
//    }
//})
//.WithName("SignIn");

app.MapPost("/signIn", (User user) =>
{
    var userDEtails  = new UserDetails { Country = "Australia", State = "NSW", UserName = user.UserName };
    return userDEtails;
}).WithName("SignIn");

app.Run();

public class User
{
    public string UserName { get; set; }
    public string Password { get; set; }
    
}


public class UserDetails
{

    public string UserName { get; set; }
    public string State { get; set; }
    public string Country { get; set; }

}
