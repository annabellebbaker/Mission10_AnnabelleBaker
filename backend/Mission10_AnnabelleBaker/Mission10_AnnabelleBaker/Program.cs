using Microsoft.EntityFrameworkCore;
using Mission10_AnnabelleBaker.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BowlingLeagueContext>(options =>
   options.UseSqlite(builder.Configuration.GetConnectionString("BowlingDbConnection")));

builder.Services.AddCors();  //This is the line many students are missing that is essential!

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.WithOrigins("http://localhost:3000")); // where we are getting the request from 

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
