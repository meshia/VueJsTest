
let lat;
let lon;

navigator.geolocation.getCurrentPosition(function(position) {
    lat = parseInt(position.coords.latitude);
    lon = parseInt(position.coords.longitude);
}, function(error) {
    console.log("Something went wrong: ", error);
});

let app = new Vue({
    el: '#app',
    data: {
        contacts: [],
        location:null,
        gettingLocation: false,
        errorStr:null
    },
    methods: {
        addContact: function() {
            let item = { 
                name: document.getElementById('newName').value,
                img: '/images/alex jonathan.jpg',
                title: document.getElementById('newTitle').value,
                company: document.getElementById('newCompany').value,
                address1: document.getElementById('newAddress1').value,
                address2: document.getElementById('newAddress2').value,
                phone:document.getElementById('newPhone').value,
                location: lat + "/" + lon
            }
            
            this.contacts.push(item);
        },

        deleteContact: function(item) {
          this.$delete(this.contacts,this.contacts.indexOf(item));
        },

        editContact: function(item) {
            console.log('edit', item);
          }

      }
  });

  app.contacts = [
    { name: 'Alex Jonathan', img: '/images/alex jonathan.jpg', title:"CEO", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106"},
    { name: 'Janeth Carton', img: '/images/janeth carton.jpg', title:"Graphic Designer", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106" },
    { name: 'John Smith', img: '/images/john-smith.jpg', title:"Graphic Designer", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106" },
    { name: 'Alex Jonathan', img: '/images/alex jonathan.jpg', title:"CEO", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106"},
    { name: 'Janeth Carton', img: '/images/janeth carton.jpg', title:"Graphic Designer", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106" },
    { name: 'John Smith', img: '/images/john-smith.jpg', title:"Graphic Designer", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106" },{ name: 'Alex Jonathan', img: '/images/alex jonathan.jpg', title:"CEO", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106"},
    { name: 'Janeth Carton', img: '/images/janeth carton.jpg', title:"Graphic Designer", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106" },
    { name: 'John Smith', img: '/images/john-smith.jpg', title:"Graphic Designer", company:"Twitter Inc.", address1: "795 Folsom Ave, Suite 600", address2:"San Francisco, CA 94107", phone:"(123) 456-7890", location:"Reviera State 32/106" }
  ];
