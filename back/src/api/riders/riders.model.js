/**
 * The rest of this file mocks a riders database.
 * Ideally, we should use a proper database.
 */
function Rider(id, name, numberOfRides, loyaltyPoints) {
    this.id = id;
    this.name = name;
    this.numberOfRides = numberOfRides;
    this.loyaltyPoints = loyaltyPoints;

    this.updateStatus = function (){
        if (this.numberOfRides < 20) {
            this.status = 0; // Bronze
        }
        else if (this.numberOfRides < 50) {
            this.status = 1; // Silver
        }
        else if (this.numberOfRides < 100) {
            this.status = 2; // Gold
        }
        else {
            this.status = 3; // Platinum
        }
    };

    this.updateStatus();
}

var myDatabase = [
    new Rider(0, 'Anna', 0, 65), //bronze
    new Rider(1, 'Tanguy', 10, 15), //bronze
    new Rider(2, 'Jack', 20, 32), //silver
    new Rider(3, 'Marie', 75, 38), //gold
    new Rider(4, 'Robert', 150, 87) //platinum
];

module.exports = {
    myDatabase
};
