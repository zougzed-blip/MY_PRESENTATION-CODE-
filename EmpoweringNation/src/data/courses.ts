import { Course } from '../types';

export const coursesData: Course[] = [
  // 6-Month Courses
  {
    id: 'first-aid',
    title: 'First Aid',
    icon: '🩹',
    fee: 1500,
    duration: '6 Months',
    purpose: 'To provide first aid awareness and basic life support',
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress e.g. Chocking, blocked airway'
    ],
    category: '6-month',
    image: require('../../assets/images/aidP.jpg')
  },
  {
    id: 'sewing',
    title: 'Sewing',
    icon: '🧵',
    fee: 1500,
    duration: '6 Months',
    purpose: 'To provide alterations and new garment tailoring services',
    content: [
      'Types of stiches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems, and seams',
      'Alterations',
      'Designing and sewing new garments'
    ],
    category: '6-month',
    image: require('../../assets/images/sewingP.jpg')
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    icon: '🌿',
    fee: 1500,
    duration: '6 Months',
    purpose: 'To provide landscaping services for new and established gardens',
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, statues, benches, tables, built-in braai)',
      'Balancing of plants shapes and trees in a garden',
      'Aesthetics of plant shapes and colors',
      'Garden layout'
    ],
    category: '6-month',
    image: require('../../assets/images/LandP.jpg')
  },
  {
    id: 'life-skills',
    title: 'Life Skills',
    icon: '💼',
    fee: 1500,
    duration: '6 Months',
    purpose: 'To provide skills to navigate basic life necessities',
    content: [
      'Opening a bank account',
      'Basic labour law (know your rights)',
      'Basic reading and writing literacy',
      'Basic number literacy'
    ],
    category: '6-month',
    image: require('../../assets/images/skP.jpg')
  },
  // 6-Week Courses
  {
    id: 'child-minding',
    title: 'Child Minding',
    icon: '👶',
    fee: 750,
    duration: '6 Weeks',
    purpose: 'To provide basic child and baby care',
    content: [
      'Birth to six-month old baby needs',
      'Seven-month to one year old needs',
      'Toddler needs',
      'Educational toys'
    ],
    category: '6-week',
    image: require('../../assets/images/childP.jpg')
  },
  {
    id: 'cooking',
    title: 'Cooking',
    icon: '🍳',
    fee: 750,
    duration: '6 Weeks',
    purpose: 'To prepare and cook nutritious family meals',
    content: [
      'Nutritional requirements for a healthy body',
      'Types of protein, carbohydrates and vegetables',
      'Planning meals',
      'Tasty and nutritious recipes',
      'Preparation and cooking meals'
    ],
    category: '6-week',
    image: require('../../assets/images/CookP.jpg')
  },
  {
    id: 'garden-maintenance',
    title: 'Garden Maintenance',
    icon: '🌱',
    fee: 750,
    duration: '6 Weeks',
    purpose: 'To provide basic knowledge of watering, pruning, and planting in a domestic garden',
    content: [
      'Water restrictions and the watering requirements of indigenous and exotic plants',
      'Pruning and propagation of plants',
      'Planting techniques for different plant types'
    ],
    category: '6-week',
    image: require('../../assets/images/gEDp.jpg')
  }
];

export const contactVenues = [
  {
    id: 'soweto',
    name: 'Soweto Campus',
    address: '123 Vilakazi Street, Orlando West, Soweto',
    phone: '+27 11 123 4567',
    email: 'soweto@empoweringthenation.org.za',
    directions: 'Located on Vilakazi Street, next to the Hector Pieterson Museum. Accessible via public transport with parking available.'
  },
  {
    id: 'alexandra',
    name: 'Alexandra Campus',
    address: '45 8th Avenue, Alexandra',
    phone: '+27 11 234 5678',
    email: 'alexandra@empoweringthenation.org.za',
    directions: 'Situated near the Pan Africa Mall. Easily accessible by taxi and bus routes.'
  },
  {
    id: 'sandton',
    name: 'Sandton Campus',
    address: '78 Rivonia Road, Sandton',
    phone: '+27 11 345 6789',
    email: 'sandton@empoweringthenation.org.za',
    directions: 'In the heart of Sandton Central, close to the Sandton City Mall and Gautrain station.'
  }
];