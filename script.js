// 1. Define nodes (characters)
const nodes = new vis.DataSet([
  { id: 1, label: 'Luz', color: '#75fadb', coven: 'Bad Girl Coven', group: 'Hexsquad' },
  { id: 2, label: 'Amity', color: '#fa75ef', coven: 'Abomination Coven', group: 'Hexsquad' },
  { id: 3, label: 'Eda', color: '#75fadb', coven: 'Bad Girl Coven', group: 'C.A.T.S' },
  { id: 4, label: 'King', color: '#75fadb', coven: 'Bad Girl Coven', group: 'C.A.T.S' },
  { id: 5, label: 'Willow', color: '#fa75ef', coven: 'Plant Coven', group: 'Hexsquad' },
  { id: 6, label: 'Gus', color: '#fa75ef', coven: 'Illusion Coven', group: 'Hexsquad' },
  { id: 7, label: 'Hunter', color: '#fa75ef', coven: "The Emperor's Coven", group: 'Hexsquad' },
  { id: 8, label: 'Lilith', color: '#fa75ef', hidden: true, coven: "The Emperor's Coven", group: 'C.A.T.S' },
  { id: 9, label: 'Hooty', color: '#fa75ef', hidden: true, coven: 'Bad Girl Coven' },
  { id: 10, label: 'Raine', color: '#fa75ef', hidden: true, coven: 'Bard Coven', group: 'C.A.T.S' },
  { id: 11, label: 'Boscha', color: '#ff5454', hidden: true, coven: 'Potions Coven' },
  { id: 12, label: 'Camila', color: '#fa75ef', hidden: true },
  { id: 13, label: 'Caleb Wittebane', color: '#ff5454', widthConstraint: { minimum: 115 } },
  { id: 14, label: 'Belos (Philip Wittebane)', color: '#75fadb', widthConstraint: { minimum: 125 }, coven: "The Emperor's Coven" },
  { id: 15, label: 'The Collector', color: '#75fadb', hidden: true },
  { id: 16, label: 'Edric', color: '#ff5454', hidden: true, coven: 'Illusion Coven' },
  { id: 17, label: 'Emira', color: '#ff5454', hidden: true, coven: 'Illusion Coven' },
  { id: 18, label: 'Alador', color: '#ff5454', hidden: true, coven: 'Abomination Coven' },
  { id: 19, label: 'Odalia', color: '#ff5454', hidden: true, coven: 'Oracle Coven' },
  { id: 20, label: 'Darius', color: '#ff5454', hidden: true, coven: 'Abomination Coven', group: 'C.A.T.S' }
]);

// 2. Define edges (Relationships) - Paste your full list of edges here!
const edges = new vis.DataSet([
    
    { from: 1, to: 2, label: 'Cotton Candy Haired Goddess (Girlfriend)' },
    { from: 1, to: 3, label: 'Second Mum' },
    { from: 1, to: 4, label: 'Little Brother' },
    { from: 1, to: 5, label: 'Best Friend' },
    { from: 1, to: 6, label: 'Best Friend' },
    { from: 1, to: 7, label: 'Brother' },
    { from: 1, to: 8, label: 'Cool Aunt' },
    { from: 1, to: 9, label: '"Housemate"' },
    { from: 1, to: 10, label: 'Stepdad' },
    { from: 1, to: 11, label: 'Bully' },
    { from: 1, to: 12, label: 'Mum' },
    { from: 1, to: 14, label: 'Enemy'},
    { from: 1, to: 15, label: 'Enemy turned Friend'},
    { from: 1, to: 16, label: 'Friend'},
    { from: 1, to: 17, label: 'Friend'},
    { from: 1, to: 18, label: 'Girlfriend\'s Dad'},
    { from: 1, to: 19, label: 'Girlfriend\'s (Really Mean) Mum'},
    { from: 1, to: 20, label: 'Ally'},
    { from: 2, to: 1, label: 'Sweet Potato (Girlfriend)' },
    { from: 2, to: 3, label: 'Friend' },
    { from: 2, to: 4, label: 'Friend' },
    { from: 2, to: 5, label: 'Best Friend' },
    { from: 2, to: 6, label: 'Best Friend' },
    { from: 2, to: 7, label: 'Close Friend' },
    { from: 2, to: 8, label: 'Idol turned Friend' },
    { from: 2, to: 9, label: 'Enemy' },
    { from: 2, to: 10, label: 'Acquaintance' },
    { from: 2, to: 11, label: 'Ex-Friend/Bully'},
    { from: 2, to: 12, label: 'Girlfriend\'s Mum / Caretaker'},
    { from: 2, to: 14, label: 'Enemy'},
    { from: 2, to: 15, label: 'Enemy turned Friend'},
    { from: 2, to: 16, label: 'Brother'},
    { from: 2, to: 17, label: 'Sister'},
    { from: 2, to: 18, label: 'Dad'},
    { from: 2, to: 19, label: '(Awful) Mum'},
    { from: 3, to: 1, label: 'Daughter' },
    { from: 3, to: 2, label: 'Daughter\'s Girlfriend' },
    { from: 3, to: 4, label: 'Son' },
    { from: 3, to: 5, label: 'Daughter\'s Nerdy Friend' },
    { from: 3, to: 6, label: 'Daughter\'s Nerdy Friend' },
    { from: 3, to: 7, label: 'Bad but Sad Boy' },
    { from: 3, to: 8, label: 'Sister' },
    { from: 3, to: 9, label: 'Annoying Housemate' },
    { from: 3, to: 10, label: 'Boyfriend' },
    { from: 3, to: 12, label: 'Mum Friend'},
    { from: 3, to: 13, label: 'Ancestor'},
    { from: 3, to: 14, label: 'Enemy'},
    { from: 3, to: 15, label: 'Enemy turned Friend'},
    { from: 3, to: 16, label: 'Daughter\'s Friend'},
    { from: 3, to: 17, label: 'Daughter\'s Friend'},
    { from: 3, to: 18, label: 'Acquaintances / Daughter\'s Girlfriend\'s Dad'},
    { from: 3, to: 20, label: 'Enemy turned Ally'},
    { from: 4, to: 1, label: 'Sister' },
    { from: 4, to: 2, label: 'Sister\'s Girlfriend' },
    { from: 4, to: 3, label: 'Mum' },
    { from: 4, to: 5, label: 'Good Friend' },
    { from: 4, to: 6, label: 'Good Friend' },
    { from: 4, to: 7, label: 'Boyfriend' },
    { from: 4, to: 8, label: 'Aunt' },
    { from: 4, to: 9, label: 'Annoying Housemate' },
    { from: 4, to: 10, label: 'Stepdad'},
    { from: 4, to: 12, label: 'Sister\'s (Other) Mum'},
    { from: 4, to: 14, label: 'Enemy'},
    { from: 4, to: 15, label: 'Frenemie turned Friend'},
    { from: 4, to: 16, label: 'Friend'},
    { from: 4, to: 17, label: 'Friend'},
    { from: 4, to: 18, label: 'Sister\'s Girlfriend\'s Dad'},
    { from: 4, to: 20, label: 'Ally'},
    { from: 5, to: 1, label: 'Best Friend'},
    { from: 5, to: 2, label: 'Best Friend'},
    { from: 5, to: 3, label: 'sorta Mentor'},
    { from: 5, to: 4, label: 'Friend'},
    { from: 5, to: 6, label: 'Best Friend'},
    { from: 5, to: 7, label: 'Close Friend'},
    { from: 5, to: 8, label: 'Acquaintance'},
    { from: 5, to: 9, label: 'Who Even Knows'},
    { from: 5, to: 10, label: 'Acquaintance'},
    { from: 5, to: 11, label: 'Bully'},
    { from: 5, to: 12, label: 'Caretaker'},
    { from: 5, to: 14, label: 'Enemy'},
    { from: 5, to: 15, label: 'Enemy turned Ally'},
    { from: 5, to: 16, label: 'Acquaintance'},
    { from: 5, to: 17, label: 'Acquaintance'},
    { from: 5, to: 18, label: 'Friend\'s Dad'},
    { from: 5, to: 19, label: 'Friend\'s Mum'},
    { from: 5, to: 20, label: 'Guy Who Kidnapped Me Once'},
    { from: 6, to: 1, label: 'Best Friend'},
    { from: 6, to: 2, label: 'Best Friend'},
    { from: 6, to: 3, label: 'sorta Mentor'},
    { from: 6, to: 4, label: 'Friend'},
    { from: 6, to: 5, label: 'Best Friend'},
    { from: 6, to: 7, label: 'Close Friend'},
    { from: 6, to: 8, label: 'Acquaintance'},
    { from: 6, to: 9, label: 'Who Even Knows'},
    { from: 6, to: 10, label: 'Acquaintance'},
    { from: 6, to: 11, label: 'Bully'},
    { from: 6, to: 12, label: 'Caretaker'},
    { from: 6, to: 14, label: 'Enemy'},
    { from: 6, to: 15, label: 'Enemy turned Ally'},
    { from: 6, to: 16, label: 'Acquaintance'},
    { from: 6, to: 17, label: 'Acquaintance'},
    { from: 6, to: 18, label: 'Friend\'s Dad who Expelled Me'},
    { from: 6, to: 19, label: 'Friend\'s Mum who Expelled Me'},
    { from: 6, to: 20, label: 'Guy Who Kidnapped Me Once'},
    { from: 7, to: 1, label: 'Sister'},
    { from: 7, to: 2, label: 'Good Friend'},
    { from: 7, to: 3, label: 'Close Family Friend'},
    { from: 7, to: 4, label: 'Girlfriend'},
    { from: 7, to: 5, label: 'Close Friend'},
    { from: 7, to: 6, label: 'Close Friend'},
    { from: 7, to: 8, label: 'Rival turned Allie'},
    { from: 7, to: 9, label: 'Who Even Knows'},
    { from: 7, to: 10, label: 'Acquaintance'},
    { from: 7, to: 11, label: 'Enemy'},
    { from: 7, to: 12, label: 'Adoptive Mum'},
    { from: 7, to: 13, label: 'Grimwalker Template/Ancestor'},
    { from: 7, to: 14, label: '"Uncle" turned Enemy'},
    { from: 7, to: 15, label: 'Enemy turned Ally'},
    { from: 7, to: 16, label: 'Acquaintance'},
    { from: 7, to: 17, label: 'Acquaintance'},
    { from: 7, to: 18, label: 'Former Business Supplier'},
    { from: 7, to: 19, label: 'Former Business Supplier'},
    { from: 7, to: 20, label: 'Father Figure'},
    { from: 8, to: 1, label: 'Niece'},
    { from: 8, to: 2, label: 'Niece\'s Girlfriend'},
    { from: 8, to: 3, label: 'Sister'},
    { from: 8, to: 4, label: 'God and Nephew', arrows:'to'},
    { from: 8, to: 5, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 6, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 7, label: 'Rival turned Allie', arrows:'to'},
    { from: 8, to: 9, label: 'Best Friend', arrows:'to'},
    { from: 8, to: 10, label: 'Friend / Sister\'s Boyfriend'},
    { from: 8, to: 12, label: 'Acquaintance'},
    { from: 8, to: 13, label: 'Ancestor'},
    { from: 8, to: 14, label: 'Boss turned Enemy'},
    { from: 8, to: 15, label: 'Enemy turned Ally'},
    { from: 8, to: 16, label: 'Acquaintance'},
    { from: 8, to: 17, label: 'Acquaintance'},
    { from: 8, to: 18, label: 'Acquaintance'},
    { from: 8, to: 19, label: 'Acquaintance'},
    { from: 8, to: 20, label: 'Former Colleague turned Ally'},
    { from: 9, to: 1, label: 'Friend'},
    { from: 9, to: 2, label: 'Friend'},
    { from: 9, to: 3, label: 'Friend'},
    { from: 9, to: 4, label: 'Friend'},
    { from: 9, to: 5, label: 'Friend'},
    { from: 9, to: 6, label: 'Friend'},
    { from: 9, to: 7, label: 'Friend'},
    { from: 9, to: 8, label: 'Bestest Friend'},
    { from: 9, to: 10, label: 'Friend'},
    { from: 9, to: 12, label: 'Friend'},
    { from: 9, to: 14, label: 'Enemy'},
    { from: 9, to: 15, label: 'Enemy turned Ally'},
    { from: 9, to: 16, label: 'Friend'},
    { from: 9, to: 17, label: 'Friend'},
    { from: 9, to: 20, label: 'Friend'},
    { from: 10, to: 1, label: 'Stepdaughter'},
    { from: 10, to: 2, label: 'Stepdaughter\'s Girlfriend'},
    { from: 10, to: 3, label: 'Girlfriend'},
    { from: 10, to: 4, label: 'Acquaintance'},
    { from: 10, to: 5, label: 'Acquaintance'},
    { from: 10, to: 6, label: 'Acquaintance'},
    { from: 10, to: 7, label: 'Acquaintance'},
    { from: 10, to: 8, label: 'Acquaintance'},
    { from: 10, to: 9, label: 'Acquaintance'},
    { from: 10, to: 12, label: 'Stepdaughter\'s Mum'},
    { from: 10, to: 14, label: 'Boss turned Enemy'},
    { from: 10, to: 15, label: 'Enemy turned Ally'},
    { from: 10, to: 16, label: 'Acquaintance'},
    { from: 10, to: 17, label: 'Acquaintance'},
    { from: 10, to: 18, label: 'Acquaintance'},
    { from: 10, to: 19, label: 'Acquaintance'},
    { from: 10, to: 20, label: 'Former Colleague turned Rebellion Ally'},
    { from: 11, to: 1, label: 'Annoying Nerd'},
    { from: 11, to: 2, label: 'Ex-Friend'},
    { from: 11, to: 4, label: 'Annoying Dog-thing'},
    { from: 11, to: 5, label: 'Half a Witch'},
    { from: 11, to: 6, label: 'Annoying Nerd'},
    { from: 11, to: 14, label: 'Leader turned Villain'},
    { from: 11, to: 15, label: 'Villain'},
    { from: 12, to: 1, label: 'Daughter'},
    { from: 12, to: 2, label: 'Daughter\'s Girlfriend'},
    { from: 12, to: 3, label: 'Mum Friend'},
    { from: 12, to: 4, label: 'Family'},
    { from: 12, to: 5, label: 'Daughter\'s Friend'},
    { from: 12, to: 6, label: 'Daughter\'s Friend'},
    { from: 12, to: 7, label: 'Adopted Son'},
    { from: 12, to: 8, label: 'Acquaintance'},
    { from: 12, to: 9, label: 'Who Even Knows'},
    { from: 12, to: 10, label: 'Acquaintance'},
    { from: 12, to: 14, label: 'Enemy'},
    { from: 12, to: 15, label: 'Enemy turned Ally'},
    { from: 13, to: 3, label: 'Descendant'},
    { from: 13, to: 7, label: 'Copy'},
    { from: 13, to: 8, label: 'Descendant'},
    { from: 13, to: 14, label: 'Brother turned Enemy'},
    { from: 14, to: 1, label: 'Enemy'},
    { from: 14, to: 2, label: 'Enemy'},
    { from: 14, to: 3, label: 'Enemy'},
    { from: 14, to: 4, label: 'Enemy'},
    { from: 14, to: 5, label: 'Enemy'},
    { from: 14, to: 6, label: 'Enemy'},
    { from: 14, to: 7, label: '"Nephew" turned Enemy'},
    { from: 14, to: 8, label: 'Subbordinate turned Enemy'},
    { from: 14, to: 10, label: 'Subbordinate turned Enemy'},
    { from: 14, to: 13, label: 'Brother'},
    { from: 14, to: 15, label: 'Piece of a Puzzle'},
    { from: 14, to: 20, label: 'Subbordinate turned Enemy'},
    { from: 15, to: 1, label: 'Plaything turned Friend'},
    { from: 15, to: 2, label: 'Plaything'},
    { from: 15, to: 3, label: 'Plaything turned Friend'},
    { from: 15, to: 4, label: 'Best Friend'},
    { from: 15, to: 5, label: 'Plaything'},
    { from: 15, to: 6, label: 'Plaything'},
    { from: 15, to: 7, label: 'Plaything'},
    { from: 15, to: 8, label: 'Plaything'},
    { from: 15, to: 9, label: 'Plaything'},
    { from: 15, to: 10, label: 'Plaything'},
    { from: 15, to: 11, label: 'Plaything'},
    { from: 15, to: 12, label: 'Plaything'},
    { from: 15, to: 14, label: 'Friend/Helper turned Enemy'},
    { from: 15, to: 16, label: 'Plaything'},
    { from: 15, to: 17, label: 'Plaything'},
    { from: 15, to: 18, label: 'Plaything'},
    { from: 15, to: 19, label: 'Mamadalia'},
    { from: 15, to: 20, label: 'Plaything'},
    { from: 16, to: 1, label: 'Friend / Sister\'s Girlfriend'},
    { from: 16, to: 2, label: 'Sister'},
    { from: 16, to: 3, label: 'Acquaintance'},
    { from: 16, to: 4, label: 'Friend'},
    { from: 16, to: 5, label: 'Acquaintance'},
    { from: 16, to: 6, label: 'Acquaintance'},
    { from: 16, to: 7, label: 'Acquaintance'},
    { from: 16, to: 8, label: 'Acquaintance'},
    { from: 16, to: 9, label: 'Who Even Knows'},
    { from: 16, to: 10, label: 'Acquaintance'},
    { from: 16, to: 14, label: 'Leader turned Enemy'},
    { from: 16, to: 15, label: 'Enemy turned Ally'},
    { from: 16, to: 17, label: 'Twin Sister'},
    { from: 16, to: 18, label: 'Dad'},
    { from: 16, to: 19, label: '(Shi*tty) Mum'},
    { from: 17, to: 1, label: 'Friend / Sister\'s Girlfriend'},
    { from: 17, to: 2, label: 'Sister'},
    { from: 17, to: 3, label: 'Acquaintance'},
    { from: 17, to: 4, label: 'Friend'},
    { from: 17, to: 5, label: 'Acquaintance'},
    { from: 17, to: 6, label: 'Acquaintance'},
    { from: 17, to: 7, label: 'Acquaintance'},
    { from: 17, to: 8, label: 'Acquaintance'},
    { from: 17, to: 9, label: 'Who Even Knows'},
    { from: 17, to: 10, label: 'Acquaintance'},
    { from: 17, to: 14, label: 'Leader turned Enemy'},
    { from: 17, to: 15, label: 'Enemy turned Ally'},
    { from: 17, to: 16, label: 'Twin Brother'},
    { from: 17, to: 18, label: 'Dad'},
    { from: 17, to: 19, label: '(Shi*tty) Mum'},
    { from: 18, to: 1, label: 'Daughter\'s Girlfriend'},
    { from: 18, to: 2, label: 'Daughter'},
    { from: 18, to: 3, label: 'Acquaintance'},
    { from: 18, to: 4, label: 'Acquaintance'},
    { from: 18, to: 5, label: 'Daughter\'s Friend'},
    { from: 18, to: 6, label: 'Daughter\'s Friend'},
    { from: 18, to: 7, label: 'Former Business Customer'},
    { from: 18, to: 8, label: 'Acquaintance'},
    { from: 18, to: 10, label: 'Acquaintance'},
    { from: 18, to: 14, label: 'Leader turned Enemy'},
    { from: 18, to: 15, label: 'Enemy turned Ally'},
    { from: 18, to: 16, label: 'Son'},
    { from: 18, to: 17, label: 'Daughter'},
    { from: 18, to: 19, label: 'Ex-Wife'},
    { from: 18, to: 20, label: 'Close Friend'},
    { from: 19, to: 1, label: 'Daughter\'s Weird Girlfriend'},
    { from: 19, to: 2, label: 'Defiant Daughter'},
    { from: 19, to: 3, label: 'Acquaintance'},
    { from: 19, to: 4, label: 'Acquaintance'},
    { from: 19, to: 5, label: 'Daughter\'s Friend'},
    { from: 19, to: 6, label: 'Daughter\'s Friend'},
    { from: 19, to: 7, label: 'Former Business Customer'},
    { from: 19, to: 8, label: 'Acquaintance'},
    { from: 19, to: 10, label: 'Acquaintance'},
    { from: 19, to: 14, label: 'Leader'},
    { from: 19, to: 15, label: 'God-like Being'},
    { from: 19, to: 16, label: 'Son'},
    { from: 19, to: 17, label: 'Daughter'},
    { from: 19, to: 18, label: 'Ex-Husband'},
    { from: 19, to: 20, label: 'Acquaintance'},
    { from: 20, to: 1, label: 'Ally'},
    { from: 20, to: 3, label: 'Ally'},
    { from: 20, to: 4, label: 'Ally'},
    { from: 20, to: 5, label: 'Acquaintance (I did kidnap her once)'},
    { from: 20, to: 6, label: 'Acquaintance (I did kidnap him once)'},
    { from: 20, to: 7, label: 'Surrogate Son'},
    { from: 20, to: 8, label: 'Former Colleague turned Ally'},
    { from: 20, to: 10, label: 'Former Colleague turned Ally'},
    { from: 20, to: 14, label: 'Leader turned Enemy'},
    { from: 20, to: 15, label: 'Enemy turned Ally'},
    { from: 20, to: 18, label: 'Close Friend'},
    { from: 20, to: 19, label: 'Acquaintance'}

]);

// 3. Layout Logic
const centerNodes = nodes.get({ filter: n => n.color === '#75fadb' }); 
const middleNodes = nodes.get({ filter: n => n.color === '#fa75ef' }); 
const outerNodes  = nodes.get({ filter: n => n.color === '#ff5454' }); 
const outerOuterNodes = nodes.get({ filter: n => n.color === '#4bd16f' });

function arrangeInCircle(nodeGroup, radius) {
  const angleStep = (2 * Math.PI) / nodeGroup.length;
  nodeGroup.forEach((node, index) => {
    const xPos = radius * Math.cos(angleStep * index);
    const yPos = radius * Math.sin(angleStep * index);
    nodes.update({ id: node.id, x: xPos, y: yPos, color: node.color });
  });
}

arrangeInCircle(centerNodes, 150); 
arrangeInCircle(middleNodes, 550); 
arrangeInCircle(outerNodes,  850); 
arrangeInCircle(outerOuterNodes, 1150);

// 4. Initialize Network
const container = document.getElementById('character-web');
const data = { nodes: nodes, edges: edges };

const options = {
  nodes: {
    font: { face: 'Nunito', color: '#212121', strokeWidth: 0 },
    shape: 'box',
    shapeProperties: {
        borderRadius: 8
    }
  },
  edges: {
    font: { face: 'Nunito', color: '#ffffff', strokeWidth: 0, align: 'horizontal' },
    width: 1.5,
    
    // --- THIS BRINGS BACK YOUR EDGE COLORS ---
    color: { 
      inherit: 'from', // The edge grabs the color of the node it comes from
      opacity: 0.6     // Slight transparency so the web doesn't look overwhelming
    }, 
    
    smooth: {
      enabled: true,
      type: 'curvedCW', 
      roundness: 0.2    
    },
    arrows: {
      to: { enabled: true, scaleFactor: 0.6 }
    }
  },
  interaction: {
    hover: true,
    selectConnectedEdges: true
  },
  physics: false 
};

const network = new vis.Network(container, data, options);


// 5. --- NEW SIDEBAR LOGIC ---
const togglesContainer = document.getElementById('toggles');

// Loop through all nodes and create a checkbox for each
nodes.forEach(node => {
  const label = document.createElement('label');
  label.className = 'toggle-row';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !node.hidden;
  checkbox.setAttribute('data-id', node.id); // <-- NEW: Ties checkbox to node ID
  
  checkbox.addEventListener('change', (event) => {
    nodes.update({ id: node.id, hidden: !event.target.checked });
  });

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(node.label));
  togglesContainer.appendChild(label);
});

// 6. --- NEW BUTTON LOGIC ---

// Sidebar Slide Animation
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// Select All / Hide All Logic
const btnSelectAll = document.getElementById('btn-select-all');
const btnHideAll = document.getElementById('btn-hide-all');

btnSelectAll.addEventListener('click', () => {
  // 1. Check all the boxes visually
  const checkboxes = document.querySelectorAll('#toggles input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = true);
  
  // 2. Tell the graph to show everyone (and remember their color!)
  nodes.forEach(node => {
    nodes.update({ id: node.id, hidden: false, color: node.color }); 
  });
});

btnHideAll.addEventListener('click', () => {
  // 1. Uncheck all the boxes visually
  const checkboxes = document.querySelectorAll('#toggles input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);
  
  // 2. Tell the graph to hide everyone (and remember their color!)
  nodes.forEach(node => {
    nodes.update({ id: node.id, hidden: true, color: node.color });
  });
});

// 7. --- LIGHT/DARK MODE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
  // Toggle the CSS class on the body
  document.body.classList.toggle('light-mode');
  
  const isLight = document.body.classList.contains('light-mode');
  
  if (isLight) {
    // Switch to Moon icon
    themeIcon.className = 'fa-regular fa-moon';
    
    // Update vis-network edge text to dark grey
    network.setOptions({
      edges: {
        font: { color: '#333333' }
      }
    });
  } else {
    // Switch to Sun icon
    themeIcon.className = 'fa-solid fa-sun';
    
    // Update vis-network edge text back to white
    network.setOptions({
      edges: {
        font: { color: '#ffffff' }
      }
    });
  }
});

// 8. --- LEGEND COLLAPSE LOGIC ---
const legendHeader = document.getElementById('legend-header');
const legendContent = document.getElementById('legend-content');
const legendArrow = document.getElementById('legend-arrow');

legendHeader.addEventListener('click', () => {
  legendContent.classList.toggle('collapsed');
  
  // Flips the arrow upside down when collapsed
  if (legendContent.classList.contains('collapsed')) {
    legendArrow.className = 'fa-solid fa-chevron-down';
  } else {
    legendArrow.className = 'fa-solid fa-chevron-up';
  }
});

// 9. --- RESET CAMERA VIEW LOGIC ---
const resetViewBtn = document.getElementById('reset-view-btn');

resetViewBtn.addEventListener('click', () => {
  network.fit({
    animation: {
      duration: 1000,
      easingFunction: 'easeInOutQuad'
    }
  });
});

// 10. --- LIVE SEARCH & AUTO-ZOOM LOGIC ---
const searchInput = document.getElementById('character-search');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  const toggleRows = document.querySelectorAll('.toggle-row');

  toggleRows.forEach(row => {
    const characterName = row.textContent.toLowerCase();
    
    // Filter sidebar list items
    if (characterName.includes(searchTerm)) {
      row.style.display = 'flex';
    } else {
      row.style.display = 'none';
    }
  });

  // If exact or close match found, smooth-zoom camera to that character node
  if (searchTerm.length > 1) {
    const matchedNode = nodes.get({
      filter: item => item.label.toLowerCase().includes(searchTerm) && !item.hidden
    })[0];

    if (matchedNode) {
      network.focus(matchedNode.id, {
        scale: 1.2,
        animation: {
          duration: 800,
          easingFunction: 'easeInOutQuad'
        }
      });
    }
  }
});

// 11. --- FIX FONT LOADING ISSUE ---
document.fonts.ready.then(() => {
  network.setOptions({
    nodes: {
      font: { face: 'Nunito' }
    }
  });
});

// 12. --- SETTINGS MENU LOGIC ---
const settingsToggleBtn = document.getElementById('settings-toggle');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.getElementById('close-settings');

// Open the menu
settingsToggleBtn.addEventListener('click', () => {
  settingsModal.classList.remove('hidden');
});

// Close the menu by clicking the X
closeSettingsBtn.addEventListener('click', () => {
  settingsModal.classList.add('hidden');
});

// Close the menu by clicking anywhere outside the box
settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.add('hidden');
  }
});

// Physics Toggle Control
const togglePhysics = document.getElementById('toggle-physics');
togglePhysics.addEventListener('change', (e) => {
  if (e.target.checked) {
    // 1. Wipe the manual X and Y coordinates (and force vis.js to remember node colors!)
    const resetPositions = nodes.get().map(node => ({
      id: node.id,
      x: undefined,
      y: undefined,
      color: node.color
    }));
    nodes.update(resetPositions);

    // 2. Turn on physics with stronger repulsion to prevent the "big ball"
    network.setOptions({
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -20000, // Pushes nodes further apart
          springLength: 250              // Makes the connecting edges longer
        }
      }
    });
  } else {
    // 1. Turn physics back off
    network.setOptions({ physics: false });

    // 2. Snap everyone back into their perfect circles!
    arrangeInCircle(centerNodes, 150); 
    arrangeInCircle(middleNodes, 550); 
    arrangeInCircle(outerNodes,  850); 
    arrangeInCircle(outerOuterNodes, 1150);
  }
});

// Edge Labels Toggle Control
const toggleEdgeLabels = document.getElementById('toggle-edge-labels');
toggleEdgeLabels.addEventListener('change', (e) => {
  if (e.target.checked) {
    // Show labels by restoring default font size
    network.setOptions({
      edges: { font: { size: 14 } }
    });
  } else {
    // Hide labels by making them size 0
    network.setOptions({
      edges: { font: { size: 0 } }
    });
  }
});

// 13. --- FACTION & GROUP FILTERS ---
const filterHeader = document.getElementById('filter-header');
const filterContent = document.getElementById('filter-content');
const filterArrow = document.getElementById('filter-arrow');

filterHeader.addEventListener('click', () => {
  filterContent.classList.toggle('collapsed');
  filterArrow.className = filterContent.classList.contains('collapsed') 
    ? 'fa-solid fa-chevron-down' 
    : 'fa-solid fa-chevron-up';
});

const covenList = [
  "The Emperor's Coven", "Abomination Coven", "Bard Coven", "Beast Keeping Coven", "Construction Coven", 
  "Healing Coven", "Illusion Coven", "Oracle Coven", "Plant Coven", "Potions Coven", "Artist Coven", 
  "Bakers Coven", "Big Dog Coven", "Cantrip Coven", "Carnivorous Plant Coven", "Cat Coven", "Chef's Coven", 
  "Cooking Coven", "Debate Coven", "Fashion Coven", "Flower Coven", "History Coven", "Incidental Coven", 
  "Meditation Coven", "Menders Coven", "Oculus Coven", "Pickup Coven", "Pottery Coven", "Prose Coven", 
  "Reaction Coven", "Scrying Coven", "Small Cat Coven", "Stylist Coven", "Succulent Coven", "Tiniest Cat Coven", 
  "Tiny Cat Coven", "Wood Coven", "Swag Coven", "Bad Girl Coven"
];
const groupList = ["C.A.T.S", "Hexsquad"];

const covenContainer = document.getElementById('coven-buttons');
const groupContainer = document.getElementById('group-buttons');

// Store the default hidden states so the Reset button knows what to do
const initialStates = {};
nodes.forEach(node => {
  initialStates[node.id] = node.hidden || false;
});

// Filtering function (Updated to fix the color bug!)
function applyFilter(filterType, filterValue) {
  nodes.forEach(node => {
    const matches = node[filterType] === filterValue;
    // Passing 'color: node.color' forces vis.js to remember your custom colors
    nodes.update({ id: node.id, hidden: !matches, color: node.color });
    
    const checkbox = document.querySelector(`.toggle-row input[data-id="${node.id}"]`);
    if (checkbox) checkbox.checked = matches;
  });
}

// Generate Coven Buttons with Icons and Tooltips
covenList.forEach(coven => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn coven-btn'; // Adds the new square class
  btn.title = coven; // This creates the hover tooltip!
  
  // Create the image element
  const icon = document.createElement('img');
  // Format the file path (see instructions below)
  icon.src = `./img/covens/${coven}.png`; 
  icon.alt = coven;

  // Fallback text just in case the image hasn't been added yet
  const fallbackText = document.createElement('span');
  fallbackText.textContent = coven;

  // NEW: If the image is missing, hide the broken icon and show the text
  icon.onerror = () => {
    icon.style.display = 'none'; 
    fallbackText.style.display = 'block'; 
  };

  btn.appendChild(icon);
  btn.appendChild(fallbackText);
  btn.addEventListener('click', () => applyFilter('coven', coven));
  covenContainer.appendChild(btn);
});

// Generate Group Buttons (Kept as normal text buttons)
groupList.forEach(group => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn';
  btn.textContent = group;
  btn.addEventListener('click', () => applyFilter('group', group));
  groupContainer.appendChild(btn);
});

// Reset Filters Logic
const btnResetFilters = document.getElementById('btn-reset-filters');
btnResetFilters.addEventListener('click', () => {
  nodes.forEach(node => {
    // Revert to the exact hidden state they had when the page loaded
    const isHidden = initialStates[node.id];
    nodes.update({ id: node.id, hidden: isHidden, color: node.color });
    
    // Update the sidebar checkboxes to match
    const checkbox = document.querySelector(`.toggle-row input[data-id="${node.id}"]`);
    if (checkbox) checkbox.checked = !isHidden;
  });
});