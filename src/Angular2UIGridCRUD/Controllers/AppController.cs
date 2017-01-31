using Angular2UIGridCRUD.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2UIGridCRUD.Controllers
{
    public class AppController : Controller
    {
        public List<HeroModel> heroes = new List<HeroModel>()
        {
                new HeroModel() { Id = 1, Name = "Captain America", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 2, Name = "Hulk", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 3, Name = "Thor", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 4, Name = "Spider-Man", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 5, Name = "Iron Man", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 6, Name = "Wasp", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 7, Name = "Thor", Team = "Avengers", Group = "Marvel"},
                new HeroModel() { Id = 8, Name = "Superman", Team = "Justice League", Group = "DC"},
                new HeroModel() { Id = 9, Name = "Batman", Team = "Justice League", Group = "DC"},
                new HeroModel() { Id = 10, Name = "Aquaman", Team = "Justice League", Group = "DC"},
                new HeroModel() { Id = 11, Name = "Wonder Woman", Team = "Justice League", Group = "DC"},
                new HeroModel() { Id = 12, Name = "Green Lantern", Team = "Justice League", Group = "DC"},
                new HeroModel() { Id = 13, Name = "Flash", Team = "Justice League", Group = "DC"},
                new HeroModel() { Id = 14, Name = "Martian Manhunter", Team = "Justice League", Group = "DC"}
        };

        public List<HeroModel> Heroes()
        {
            return this.heroes;
        }

        public HeroModel HeroGet(int id)
        {
            return this.heroes.Single(h => h.Id == id);
        }
    }
}
