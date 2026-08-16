// 1. Define nodes (characters)
const nodes = new vis.DataSet([
  { id: 1, label: 'Luz', color: '#75fadb' },
  { id: 2, label: 'Amity', color: '#fa75ef' },
  { id: 3, label: 'Eda', color: '#75fadb' },
  { id: 4, label: 'King', color: '#75fadb' },
  { id: 5, label: 'Willow', color: '#fa75ef' },
  { id: 6, label: 'Gus', color: '#fa75ef' },
  { id: 7, label: 'Hunter', color: '#fa75ef' },
  { id: 8, label: 'Lilith', color: '#fa75ef', hidden: true },
  { id: 9, label: 'Hooty', color: '#fa75ef', hidden: true },
  { id: 10, label: 'Raine', color: '#fa75ef', hidden: true},
  { id: 11, label: 'Boscha', color: '#ff5454', hidden: true},
  { id: 12, label: 'Camila', color: '#fa75ef', hidden: true},
  { id: 13, label: 'Caleb Wittebane', color: '#ff5454', widthConstraint: { minimum: 115 }},
  { id: 14, label: 'Belos (Philip Wittebane)', color: '#75fadb', widthConstraint: { minimum: 125 }},
  { id: 15, label: 'The Collector', color: '#75fadb', hidden: true}
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
    { from: 2, to: 12, label: 'Girlfriends Mum / Caretaker'},
    { from: 2, to: 14, label: 'Enemy'},
    { from: 2, to: 15, label: 'Enemy turned Friend'},
    { from: 3, to: 1, label: 'Daughter' },
    { from: 3, to: 2, label: 'Daughters Girlfriend' },
    { from: 3, to: 4, label: 'Son' },
    { from: 3, to: 5, label: 'Daughters Nerdy Friend' },
    { from: 3, to: 6, label: 'Daughters Nerdy Friend' },
    { from: 3, to: 7, label: 'Bad but Sad Boy' },
    { from: 3, to: 8, label: 'Sister' },
    { from: 3, to: 9, label: 'Annoying Housemate' },
    { from: 3, to: 10, label: 'Boyfriend' },
    { from: 3, to: 12, label: 'Mum Friend'},
    { from: 3, to: 13, label: 'Ancestor'},
    { from: 3, to: 14, label: 'Enemy'},
    { from: 3, to: 15, label: 'Enemy turned Friend'},
    { from: 4, to: 1, label: 'Sister' },
    { from: 4, to: 2, label: 'Sisters Girlfriend' },
    { from: 4, to: 3, label: 'Mum' },
    { from: 4, to: 5, label: 'Good Friend' },
    { from: 4, to: 6, label: 'Good Friend' },
    { from: 4, to: 7, label: 'Boyfriend' },
    { from: 4, to: 8, label: 'Aunt' },
    { from: 4, to: 9, label: 'Annoying Housemate' },
    { from: 4, to: 10, label: 'Stepdad'},
    { from: 4, to: 12, label: 'Sisters (Other) Mum'},
    { from: 4, to: 14, label: 'Enemy'},
    { from: 4, to: 15, label: 'Frenemie turned Friend'},
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
    { from: 8, to: 1, label: 'Niece'},
    { from: 8, to: 2, label: 'Nieces Girlfriend'},
    { from: 8, to: 3, label: 'Sister'},
    { from: 8, to: 4, label: 'God and Nephew', arrows:'to'},
    { from: 8, to: 5, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 6, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 7, label: 'Rival turned Allie', arrows:'to'},
    { from: 8, to: 9, label: 'Best Friend', arrows:'to'},
    { from: 8, to: 10, label: 'Friend / Sisters Boyfriend'},
    { from: 8, to: 12, label: 'Acquaintance'},
    { from: 8, to: 13, label: 'Ancestor'},
    { from: 8, to: 14, label: 'Boss turned Enemy'},
    { from: 8, to: 15, label: 'Enemy turned Ally'},
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
    { from: 10, to: 1, label: 'Stepdaughter'},
    { from: 10, to: 2, label: 'Stepdaughters Girlfriend'},
    { from: 10, to: 3, label: 'Girlfriend'},
    { from: 10, to: 4, label: 'Acquaintance'},
    { from: 10, to: 5, label: 'Acquaintance'},
    { from: 10, to: 6, label: 'Acquaintance'},
    { from: 10, to: 7, label: 'Acquaintance'},
    { from: 10, to: 8, label: 'Acquaintance'},
    { from: 10, to: 9, label: 'Acquaintance'},
    { from: 10, to: 12, label: 'Stepdaughters Mum'},
    { from: 10, to: 14, label: 'Boss turned Enemy'},
    { from: 10, to: 15, label: 'Enemy turned Ally'},
    { from: 11, to: 1, label: 'Annoying Nerd'},
    { from: 11, to: 2, label: 'Ex-Friend'},
    { from: 11, to: 4, label: 'Annoying Dog-thing'},
    { from: 11, to: 5, label: 'Half a Witch'},
    { from: 11, to: 6, label: 'Annoying Nerd'},
    { from: 11, to: 14, label: 'Leader turned Villain'},
    { from: 11, to: 15, label: 'Villain'},
    { from: 12, to: 1, label: 'Daughter'},
    { from: 12, to: 2, label: 'Daughters Girlfriend'},
    { from: 12, to: 3, label: 'Mum Friend'},
    { from: 12, to: 4, label: 'Family'},
    { from: 12, to: 5, label: 'Daughters Friend'},
    { from: 12, to: 6, label: 'Daughters Friend'},
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
    { from: 15, to: 1, label: 'Plaything'},
    { from: 15, to: 2, label: 'Plaything'},
    { from: 15, to: 3, label: 'Plaything'},
    { from: 15, to: 4, label: 'Best Friend'},
    { from: 15, to: 5, label: 'Plaything'},
    { from: 15, to: 6, label: 'Plaything'},
    { from: 15, to: 7, label: 'Plaything'},
    { from: 15, to: 8, label: 'Plaything'},
    { from: 15, to: 9, label: 'Plaything'},
    { from: 15, to: 10, label: 'Plaything'},
    { from: 15, to: 11, label: 'Plaything'},
    { from: 15, to: 12, label: 'Plaything'},
    { from: 15, to: 14, label: 'Friend turned Enemy'}

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
    nodes.update({ id: node.id, x: xPos, y: yPos });
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
  // Create a label wrapper
  const label = document.createElement('label');
  label.className = 'toggle-row';
  
  // Create the checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !node.hidden; // Make them all checked by default
  
  // Listen for clicks on the checkbox
  checkbox.addEventListener('change', (event) => {
    // If unchecked, set 'hidden' to true. If checked, set 'hidden' to false.
    // (vis-network automatically hides all connected edges when a node is hidden!)
    nodes.update({ id: node.id, hidden: !event.target.checked });
  });

  // Put it all together and add it to the sidebar
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
  
  // 2. Tell the graph to show everyone
  nodes.forEach(node => {
    nodes.update({ id: node.id, hidden: false });
  });
});

btnHideAll.addEventListener('click', () => {
  // 1. Uncheck all the boxes visually
  const checkboxes = document.querySelectorAll('#toggles input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);
  
  // 2. Tell the graph to hide everyone
  nodes.forEach(node => {
    nodes.update({ id: node.id, hidden: true });
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