// 1. Define nodes (characters)
const visibleIds = [1, 2, 3, 4, 5, 6, 7, 13, 14];

// Set hidden: true for any character NOT in the list
const formattedNodes = nodesData.map(node => ({
  ...node,
  hidden: !visibleIds.includes(node.id)
}));

const nodes = new vis.DataSet(formattedNodes);

// 2. Define edges (Relationships)
const edges = new vis.DataSet(
  rawEdges.map(([from, to, label]) => ({ from, to, label }))
);

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
  checkbox.setAttribute('data-id', node.id);
  
  // Explicitly passing node.color prevents vis.js from resetting group-tagged node colors
  checkbox.addEventListener('change', (event) => {
    nodes.update({ id: node.id, hidden: !event.target.checked, color: node.color });
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
const groupList = ["C.A.T.S", "Hexsquad", "Titan Trappers"];

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
  icon.src = `../img/covens/${coven}.png`; 
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