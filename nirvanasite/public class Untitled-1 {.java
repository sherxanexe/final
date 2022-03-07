public class Untitled-1 {
    class Main {
        public static void main(String[] args) {
          Player warrior = new Player("Riley", 
                                       new Weapon("Axe"),
                                       new Armor("Tunic"));
      
      
          StringBuilder info = new StringBuilder();
          info.append("Name: " + warrior.name + "\n");
          info.append("Weapon: " + warrior.mainWeapon() + "\n");
          info.append("Armor: " + warrior.mainArmor() + "\n"); 
          
          System.out.println(info.toString());
        }
      }
    
    }
}