// 1. Define nodes (characters)
const nodes = new vis.DataSet([
  { id: 1, label: 'Luz', color: '#75fadb' },
  { id: 2, label: 'Amity', color: '#fa75ef' },
  { id: 3, label: 'Eda', color: '#75fadb' },
  { id: 4, label: 'King', color: '#75fadb' },
  { id: 5, label: 'Willow', color: '#fa75ef' },
  { id: 6, label: 'Gus', color: '#fa75ef' },
  { id: 7, label: 'Hunter', color: '#fa75ef' },
  { id: 8, label: 'Lilith', color: '#fa75ef' },
  { id: 9, label: 'Hooty', color: '#fa75ef' },
  { id: 10, label: 'Raine', color: '#ff5454'}
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
    { from: 2, to: 1, label: 'Sweet Potato (Girlfriend)' },
    { from: 2, to: 3, label: 'Friend' },
    { from: 2, to: 4, label: 'Friend' },
    { from: 2, to: 5, label: 'Best Friend' },
    { from: 2, to: 6, label: 'Best Friend' },
    { from: 2, to: 7, label: 'Close Friend' },
    { from: 2, to: 8, label: 'Idol turned Friend' },
    { from: 2, to: 9, label: 'Enemy' },
    { from: 2, to: 10, label: 'Acquaintance' },
    { from: 3, to: 1, label: 'Daughter' },
    { from: 3, to: 2, label: 'Daughters Girlfriend' },
    { from: 3, to: 4, label: 'Son' },
    { from: 3, to: 5, label: 'Daughters Nerdy Friend' },
    { from: 3, to: 6, label: 'Daughters Nerdy Friend' },
    { from: 3, to: 7, label: 'Bad but Sad Boy' },
    { from: 3, to: 8, label: 'Sister' },
    { from: 3, to: 9, label: 'Annoying Housemate' },
    { from: 3, to: 10, label: 'Boyfriend' },
    { from: 4, to: 1, label: 'Sister' },
    { from: 4, to: 2, label: 'Sisters Girlfriend' },
    { from: 4, to: 3, label: 'Mum' },
    { from: 4, to: 5, label: 'Good Friend' },
    { from: 4, to: 6, label: 'Good Friend' },
    { from: 4, to: 7, label: 'Boyfriend' },
    { from: 4, to: 8, label: 'Aunt' },
    { from: 4, to: 9, label: 'Annoying Housemate' },
    { from: 4, to: 10, label: 'Stepdad'},
    { from: 5, to: 1, label: 'Best Friend'},
    { from: 5, to: 2, label: 'Best Friend'},
    { from: 5, to: 3, label: 'sorta Mentor'},
    { from: 5, to: 4, label: 'Friend'},
    { from: 5, to: 6, label: 'Best Friend'},
    { from: 5, to: 7, label: 'Close Friend'},
    { from: 5, to: 8, label: 'Acquaintance'},
    { from: 5, to: 9, label: 'Who Even Knows'},
    { from: 5, to: 10, label: 'Acquaintance'},
    { from: 6, to: 1, label: 'Best Friend'},
    { from: 6, to: 2, label: 'Best Friend'},
    { from: 6, to: 3, label: 'sorta Mentor'},
    { from: 6, to: 4, label: 'Friend'},
    { from: 6, to: 5, label: 'Best Friend'},
    { from: 6, to: 7, label: 'Close Friend'},
    { from: 6, to: 8, label: 'Acquaintance'},
    { from: 6, to: 9, label: 'Who Even Knows'},
    { from: 6, to: 10, label: 'Acquaintance'},
    { from: 7, to: 1, label: 'Sister'},
    { from: 7, to: 2, label: 'Good Friend'},
    { from: 7, to: 3, label: 'Close Family Friend'},
    { from: 7, to: 4, label: 'Girlfriend'},
    { from: 7, to: 5, label: 'Close Friend'},
    { from: 7, to: 6, label: 'Close Friend'},
    { from: 7, to: 8, label: 'Acquaintance'},
    { from: 7, to: 9, label: 'Who Even Knows'},
    { from: 7, to: 10, label: 'Acquaintance'},
    { from: 8, to: 1, label: 'Niece'},
    { from: 8, to: 2, label: 'Nieces Girlfriend'},
    { from: 8, to: 3, label: 'Sister'},
    { from: 8, to: 4, label: 'Rival turned Allie', arrows:'to'},
    { from: 8, to: 5, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 6, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 7, label: 'Acquaintance', arrows:'to'},
    { from: 8, to: 9, label: 'Best Friend', arrows:'to'},
    { from: 8, to: 10, label: 'Friend / Sisters Boyfriend'},
    { from: 9, to: 1, label: 'Best Friend'},
    { from: 9, to: 2, label: 'Best Friend'},
    { from: 9, to: 3, label: 'Best Friend'},
    { from: 9, to: 4, label: 'Best Friend'},
    { from: 9, to: 5, label: 'Best Friend'},
    { from: 9, to: 6, label: 'Best Friend'},
    { from: 9, to: 7, label: 'Best Friend'},
    { from: 9, to: 8, label: 'Best Friend'},
    { from: 9, to: 10, label: 'Best Friend'},
    { from: 10, to: 1, label: 'Stepdaughter'},
    { from: 10, to: 2, label: 'Stepdaughters Girlfriend'},
    { from: 10, to: 3, label: 'Girlfriend', arrows:'to'},
    { from: 10, to: 4, label: 'Acquaintance', arrows:'to'},
    { from: 10, to: 5, label: 'Acquaintance', arrows:'to'},
    { from: 10, to: 6, label: 'Acquaintance'},
    { from: 10, to: 7, label: 'Acquaintance'},
    { from: 10, to: 8, label: 'Acquaintance'},
    { from: 10, to: 9, label: 'Acquaintance'}

]);

// 3. Layout Logic
const centerNodes = nodes.get({ filter: n => n.color === '#75fadb' }); 
const middleNodes = nodes.get({ filter: n => n.color === '#fa75ef' }); 
const outerNodes  = nodes.get({ filter: n => n.color === '#ff5454' }); 

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

// 4. Initialize Network
const container = document.getElementById('character-web');
const data = { nodes: nodes, edges: edges };

const options = {
  nodes: {
    font: { face: 'Nunito', color: '#212121', strokeWidth: 0 },
    shape: 'box',
    shapeProperities: {
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
  checkbox.checked = true; // Make them all checked by default
  
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