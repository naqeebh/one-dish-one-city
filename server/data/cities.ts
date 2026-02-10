export type City = {
  id: string
  cityName: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
  dish: {
    name: string
    description: string
    image: string // static image filename
  }
}

export const cities: City[] = [
  {
    id: 'new-york',
    cityName: 'New York',
    country: 'United States',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
    dish: {
      name: 'Bagel with Lox',
      description:
        'A New York classic featuring a toasted bagel topped with cream cheese, cured salmon, capers, and onion.',
      image: 'bagel-lox.jpg',
    },
  },
  {
    id: 'mexico-city',
    cityName: 'Mexico City',
    country: 'Mexico',
    coordinates: {
      lat: 19.4326,
      lng: -99.1332,
    },
    dish: {
      name: 'Tacos al Pastor',
      description:
        'Spit-grilled pork tacos marinated with spices and pineapple, served on soft corn tortillas.',
      image: 'tacos-al-pastor.jpg',
    },
  },
  {
    id: 'rio-de-janeiro',
    cityName: 'Rio de Janeiro',
    country: 'Brazil',
    coordinates: {
      lat: -22.9068,
      lng: -43.1729,
    },
    dish: {
      name: 'Feijoada',
      description:
        'A rich black-bean stew with pork cuts, traditionally served with rice, greens, and orange slices.',
      image: 'feijoada.jpg',
    },
  },
  {
    id: 'lisbon',
    cityName: 'Lisbon',
    country: 'Portugal',
    coordinates: {
      lat: 38.7223,
      lng: -9.1393,
    },
    dish: {
      name: 'Pastel de Nata',
      description:
        'A crisp custard tart with a caramelised top, dusted with cinnamon and icing sugar.',
      image: 'pastel-de-nata.jpg',
    },
  },
  {
    id: 'naples',
    cityName: 'Naples',
    country: 'Italy',
    coordinates: {
      lat: 40.8518,
      lng: 14.2681,
    },
    dish: {
      name: 'Pizza Margherita',
      description:
        'The original Neapolitan pizza with tomato sauce, mozzarella, basil, and olive oil.',
      image: 'pizza-margherita.jpg',
    },
  },
  {
    id: 'london',
    cityName: 'London',
    country: 'United Kingdom',
    coordinates: {
      lat: 51.5072,
      lng: -0.1276,
    },
    dish: {
      name: 'Fish and Chips',
      description:
        'Battered cod served with chunky chips, traditionally enjoyed with malt vinegar.',
      image: 'fish-and-chips.jpg',
    },
  },
  {
    id: 'berlin',
    cityName: 'Berlin',
    country: 'Germany',
    coordinates: {
      lat: 52.52,
      lng: 13.405,
    },
    dish: {
      name: 'Currywurst',
      description:
        'A Berlin street-food staple made from pork sausage topped with spiced ketchup and curry powder.',
      image: 'currywurst.jpg',
    },
  },
  {
    id: 'cape-town',
    cityName: 'Cape Town',
    country: 'South Africa',
    coordinates: {
      lat: -33.9249,
      lng: 18.4241,
    },
    dish: {
      name: 'Bobotie',
      description:
        'A baked spiced minced-meat dish with egg custard topping, influenced by Cape Malay cuisine.',
      image: 'bobotie.jpg',
    },
  },
  {
    id: 'mumbai',
    cityName: 'Mumbai',
    country: 'India',
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    dish: {
      name: 'Vada Pav',
      description:
        'A deep-fried potato fritter served in a bread roll with chutneys — Mumbai’s iconic street food.',
      image: 'vada-pav.jpg',
    },
  },
  {
    id: 'sydney',
    cityName: 'Sydney',
    country: 'Australia',
    coordinates: {
      lat: -33.8688,
      lng: 151.2093,
    },
    dish: {
      name: 'Meat Pie',
      description:
        'A flaky pastry filled with minced meat and gravy, commonly enjoyed with tomato sauce.',
      image: 'meat-pie.jpg',
    },
  },
  {
    id: 'tokyo',
    cityName: 'Tokyo',
    country: 'Japan',
    coordinates: {
      lat: 35.6762,
      lng: 139.6503,
    },
    dish: {
      name: 'Ramen',
      description:
        'A deeply flavoured noodle soup with broth, wheat noodles, and toppings like pork and egg.',
      image: 'ramen.jpg',
    },
  },
]
