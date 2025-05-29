// Define pages with dynamic content
const pages = {
  home: `
    <section>

      <!-- Figure and text section -->
      <div class="figure-text-section">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Ines2024_photo.jpg?v=1735896908900" alt="Figure description">
        <!-- Replace 'path-to-your-figure.jpg' with your figure's URL -->
        <div class="text-content">
          <h2>About</h2>
          <i>Principal Researcher at the Natural History Museum, London</i>
          <p>I am a crystallographer whose research focuses on structure–property relationships in materials and minerals, with the use of non-ambient diffraction setups to access in-situ structural transformations and synthesis of new solids under extreme conditions.
            
          </p>  
        </div>       
      </div>
      
      <!-- Full-page landscape image -->
      <div class="hero-image">
        <img src ="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/website_toc.png?v=1735830225830" alt="Hero Image" class="hero-image">
        <!-- Replace 'path-to-your-image.jpg' with your image URL -->
        <div style="height: 50px;"></div>
      </div>       
      
    </section>
  `,
  research: `
    <section>
      <h1>Research</h1>
      <p>Our research focuses on structural transformations and material synthesis under extreme conditions using non-ambient diffraction setups.</p>
      <div class="research">
        <!-- Box 1 -->
        <div class="research-box">
          <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/salty_ice.png?v=1735830386146" alt="Salt Hydrate Image">
          <p>Salt hydrate mineralogy relevant to icy moon conditions</p>
        </div>
        <!-- Box 2 -->
        <div class="research-box">
          <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/FunctionalMinerals.png?v=1735896834015" alt="Functional Materials Image">
          <p>Functional materials and their mineral counterparts</p>
        </div>
        <!-- Box 3 -->
        <div class="research-box">
          <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Diamond_inclusion_figure.png?v=1735830255133" alt="Diamond Defects Image">
          <p>Diamond defects and their inclusions</p>
        </div>
        <!-- Box 4 -->
        <div class="research-box">
          <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/inbdc_indicatrix.png?v=1735830337888" alt="Compressibility Image">
          <p>Compressibility and thermal expansion behaviours</p>
        </div>
        <!-- Box 5 -->
        <div class="research-box">
          <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/electron_diff.png?v=1735830306380" alt="Electron Diffraction Image">
          <p>3D Electron diffraction</p>
        </div>
      </div>
      
      <h1>Open positions</h1>
      <div class="publication">
      <div class="publication-text">
        <p3>Get in touch if interested in PhD or postdoctoral positions in our group.
      </div>
      </div>

      <div class="publication">
      <div class="publication-text">
        <p>We are also able to provide co-supervision of master projects in partnership with London universities.</p>
      </div>
      </div>
    </section>
    <div style="height: 50px;"></div>
  `,
  publications: `
    <section>
      <h1>Publications</h1>
      <p>Full publication list can be found <a href="https://scholar.google.de/citations?user=5Yzriq8AAAAJ&hl=en" target="_blank">here</a>.</p>
      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/cover.png?v=1734727069590" alt="Publication 1 Image">
        <div class="publication-text">
          <h3>On the identification of hyperhydrated sodium chloride hydrates, stable at icy moon conditions </h3>
          <p>B. Journaux, A. Pakhomova, I. E. Collings, S. Petitgirard, T. Boffa Ballaran, J. M. Brown, S. D. Vance, S. Chariton, V. B. Prakapenka, D. Huang, J. Ott, K. Glazyrin, G. Garbarino, D. Comboni, M. Hanfland, PNAS, 120, e2217125120, (2023).</p>
          <a href="https://www.pnas.org/doi/10.1073/pnas.2217125120" target="_blank">Read More</a> <!-- Hyperlink for Publication 2 -->
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Radiation_toc3.png?v=1734957856797" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Effect of synchrotron X-ray radiation damage on phase transitions in coordination polymers at high Pressure</h3>
          <p>I. E. Collings, M. Hanfland, Acta Cryst. B, 78, 100-106, (2022).</p>
          <a href="https://journals.iucr.org/paper?buy=yes&cnor=eb5069&showscheme=yes&sing=yes" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Acetone_water_toc.gif?v=1734958121029" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Host–Guest Hydrogen Bonding in High-Pressure Acetone Clathrate Hydrates: In Situ Single-Crystal X-ray Diffraction Study</h3>
          <p>A. Pakhomova, I. E. Collings, B. Journaux, S. Petitgirard, T. Boffa Ballaran, D. Huang, J. Ott, A. Kurnosov, M. Hanfland, G. Garbarino, D. Comboni, J. Chem. Phys. Lett., 13, 1833-1838, (2022).</p>
          <a href="https://pubs.acs.org/doi/10.1021/acs.jpclett.1c03911" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/toc3.png?v=1734957863538" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Competing phases in the room-temperature M<sub>2</sub>(2,6-ndc)<sub>2</sub>(dabco) metal–organic framework thin film synthesis</h3>
          <p>L. Hamon, I. Andrusenko, A. Borzì, M. Stiefel, S. Carl, R. Frison, A. Cervellino, M. Gemmi, G. Santiso-Quinones, E. Hovestreydt, A. Neels, I. E. Collings, Adv. Mater., 3, 6869-6877, (2022).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2022/ma/d2ma00389a" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/PBAs_toc_2021.gif?v=1734958169951" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Probing the Influence of Defects, Hydration, and Composition on Prussian Blue Analogues with Pressure</h3>
          <p>H. L.B. Boström, I. E. Collings, D. Daisenberger, C. J. Ridley, N. P. Funnell, A. B. Cairns, J. Am. Chem. Soc., 143, 3544–3554, (2021).</p>
          <a href="https://pubs.acs.org/doi/10.1021/jacs.0c13181" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/PBA_toc-01.png?v=1734957945521" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Spin crossover in the Prussian blue analogue FePt(CN)<sub>6</sub> induced by pressure or X-ray irradiation</h3>
          <p>H. L. B. Boström, A. B Cairns, L. Liu, P. Lazor, I. E. Collings, Dalton Trans., 49, 12940–12944, (2020).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2020/dt/d0dt02036b" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/DMA_staticTOC-01.png?v=1734957881886" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Static disorder in a perovskite mixed-valence metal–organic framework</h3>
          <p>I. E. Collings, P. J. Saines, M. Mikolasek, T. Boffa Ballaran and M. Hanfland, CrystEngComm, 22, 2859–2865, (2020).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2020/ce/d0ce00119h" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Metal_formates_Ptak2020.jpeg?v=1734958308054" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Effect of Alkali and Trivalent Metal Ions on the High-Pressure Phase Transition of [C<sub>2</sub>H<sub>5</sub>NH<sub>3</sub>]M<sup>I</sup><sub>0.5</sub>M<sup>III</sup><sub>0.5</sub>(HCOO)<sub>3,</sub> (M<sup>I</sup> = Na, K and M<sup>III</sup> = Cr, Al) Heterometallic Perovskites</h3>
          <p>M. Ptak, K. L. Svane, I. E. Collings, and W. Paraguassu, J. Phys. Chem. C, 124, 6337–6348, (2020).</p>
          <a href="https://pubs.acs.org/doi/10.1021/acs.jpcc.0c00372" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Ice_toc.png?v=1735230337916" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Holistic approach for studying planetary hydrospheres: Gibbs representation of ices thermodynamics, elasticity and the water phase diagram to 2300 MPa</h3>
          <p>B. Journaux, J. M. Brown, A. Pakhomova, I. E. Collings, S. Petitgirard, P. Espinoza, T. Boffa Ballaran, S. D. Vance, J. Ott, F. Cova, G. Garbarino, and M. Hanfland, JGR Planets, 125, (2020).</p>
          <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006176" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/MOFs_HP_toc.png?v=1734958376454" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Metal–organic frameworks under pressure</h3>
          <p>I. E. Collings, and A. L. Goodwin, J. Appl. Phys., 126, 181101, (2019).</p>
          <a href="https://pubs.aip.org/aip/jap/article/126/18/181101/156413/Metal-organic-frameworks-under-pressure" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/DMA_MossTOC-01.png?v=1734957877222" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Local Structure of Ferroic Iron Formates at Low Temperature and High Pressure Studied by Mössbauer Spectroscopy</h3>
          <p>I. E. Collings, D. M. Vasiukov, C. A. McCammon, L. Dubrovinsky, V. Cerantola, S. Petitgirard, C. B. Hübschle, A. Schönleber, D. Chernyshov, S. van Smaalen, and N. Dubrovinskaia, J. Phys. Chem. C, 123, 21676–21684, (2019).</p>
          <a href="https://pubs.acs.org/doi/10.1021/acs.jpcc.9b04749" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/2_TOC-01.png?v=1735225016842" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Raman and single-crystal X-ray diffraction evidence of pressure-induced phase transitions in a perovskite-like framework of [(C<sub>3</sub>H<sub>7</sub>)<sub>4</sub>N][Mn(N(CN)<sub>2</sub>)<sub>3</sub>]</h3>
          <p>M. Mączka, I. E. Collings, F. F. Leite, and W. Paraguassu, Dalton Trans., 48, 9072–9078, (2019).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2019/dt/c9dt01648a" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Metal_formates_Ptak2019.jpeg?v=1735228239613" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Pressure-enhanced ferroelectric polarisation in polar perovskite-like [C<sub>2</sub>H<sub>5</sub>NH<sub>3</sub>]Na<sub>0.5</sub>Cr<sub>0.5</sub>(HCOO)<sub>3</sub> metal–organic framework</h3>
          <p>M. Ptak, I. E. Collings, K. L. Svane, A. Sieradzki, W. Paraguassu, and M. Mączka, J. Mater. Chem. C, 7, 8660–8668, (2019).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2019/tc/c9tc01924c" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/1_4HCB_toc-01.png?v=1734957914895" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Packing Rearrangements in 4-Hydroxycyanobenzene Under Pressure</h3>
          <p>I. E. Collings, and M. Hanfland, Molecules, 24, 1759, (2019).</p>
          <a href="https://www.mdpi.com/1420-3049/24/9/1759" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/GaH2PO2_toc.png?v=1735228278514" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Polymorphism in M(H<sub>2</sub>PO<sub>2</sub>)<sub>3</sub> (M = V, Al, Ga) compounds with the perovskite-related ReO<sub>3</sub> structure</h3>
          <p>H. A. Evans, Z. Deng, I. E. Collings, Y. Wu, J. L. Andrews, K. Pilar, J. M. Tuffnell, G. Wu, J. Wang, S. E. Dutton, P. D. Bristowe, R. Seshadri, and A. K. Cheetham, Chem. Commun., 55, 2964–2967, (2019).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2019/cc/c9cc00118b" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/TOC_PBA-01.png?v=1734958063544" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>High-pressure behaviour of Prussian blue analogues: interplay of hydration, Jahn-Teller distortions and vacancies</h3>
          <p>H. L. B. Boström, I. E. Collings, A. B. Cairns, C. P. Romao, and A. L. Goodwin, Dalton Trans., 48, 1647–1655 (2019).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2019/dt/c8dt04463e" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/TOC_8by4cm.png?v=1734957954545" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Pressure dependence of spin canting in ammonium metal formate antiferromagnets</h3>
          <p>I. E. Collings, R. S. Manna, A. A. Tsirlin, M. Bykov, E. Bykova, P. Gegenwart, M. Hanfland, S. van Smaalen, L. Dubrovinsky, and N. Dubrovinskaia, Phys. Chem. Chem. Phys., 20, 24465–24476, (2018).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2018/cp/c8cp03761b" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/DMAMF_TOC.png?v=1734957887332" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Disorder–order transitions in the perovskite metal–organic frameworks [(CH<sub>3</sub>)<sub>2</sub>NH<sub>2</sub>][M(HCOO)<sub>3</sub>] at high pressure</h3>
          <p>I. E. Collings, M. Bykov, E. Bykova, M. Hanfland, S. van Smaalen, L. Dubrovinsky, and N. Dubrovinskaia, CrystEngComm, 20, 3512–3521, (2018). </p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2018/ce/c8ce00617b" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/AMF-II_TOCc-01.png?v=1734957934935" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Structural distortions in the high-pressure polar phases of ammonium metal formates</h3>
          <p>I. E. Collings, M. Bykov, E. Bykova, M. G. Tucker, S. Petitgirard, M. Hanfland, K. Glazyrin, S. van Smaalen, A. L. Goodwin, L. Dubrovinsky, and N. Dubrovinskaia, CrystEngComm 18, 8849–8857, (2016).</p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2016/ce/c6ce01891b" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Neon_MOF_TOC.jpg?v=1735228844968" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Neon-bearing ammonium metal formates: formation and behaviour under pressure</h3>
          <p>I. E. Collings, E. Bykova, M. Bykov, S. Petitgirard, M. Hanfland, D. Paliwoda, L. Dubrovinsky, and N. Dubrovinskaia, ChemPhysChem 17, 3369–3372, (2016).</p>
          <a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/cphc.201600854" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/ABX3_toc-01.png?v=1735228965985" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Compositional dependence of anomalous thermal expansion in perovskite-like ABX3 formates</h3>
          <p>I. E. Collings, J. A. Hill, A. B. Cairns, R. I. Cooper, A. L. Thompson, J. E. Parker, C. C. Tang, and A. L. Goodwin, Dalton Trans. 45, 4169–4178 (2016).  </p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2016/dt/c5dt03263f" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/GeometricMOFs.gif?v=1735229107474" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Geometric switching of linear to area negative thermal expansion in uniaxial metal–organic frameworks</h3>
          <p>I. E. Collings, M. G. Tucker, D. A. Keen, and A. L. Goodwin, CrystEngComm 16, 3498–3506 (2014). </p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2014/ce/c3ce42165a" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Homologous_mechanics.png?v=1735229277591" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Homologous critical behaviour in the molecular frameworks Zn(CN)2 and Cd(imidazolate)2</h3>
          <p>I. E. Collings, A. B. Cairns, A. L. Thompson, J. E. Parker, C. C. Tan, M. G. Tucker, J. Catafesta, C. Levelut, J. Haines, V. Dmitriev, P. Pattison, and A. L. Goodwin, J. Am. Chem. Soc. 135, 7610–7620, (2013). </p>
          <a href="https://pubs.acs.org/doi/10.1021/ja401268g" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/Agmim_supramolecular%20mechanics.png?v=1740750596246" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Supramolecular mechanics in a metal–organic framework</h3>
          <p>J. M. Ogborn, I. E. Collings, S. A. Moggach, A. L. Thompson and A. L. Goodwin, Chem. Sci. 3, 3011–3017, (2012). </p>
          <a href="https://pubs.rsc.org/en/content/articlelanding/2012/sc/c2sc20596c" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/ZnISN2_PDF.png?v=1735229534044" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Static disorder and local structure in zinc(II) isonicotinate, a quartz-like metal–organic framework</h3>
          <p>I. E. Collings, M. G. Tucker, D. A. Keen, and A. L. Goodwin, Z. Krist. 227, 313–320, (2012). </p>
          <a href="https://www.degruyter.com/document/doi/10.1524/zkri.2012.1509/html" target="_blank">Read More</a>
        </div>
      </div>

      <div class="publication">
        <img src="https://cdn.glitch.global/58531a16-f1e8-4ee7-93b8-d5e0caf048ea/UrateOxidase.png?v=1735229752087" alt="Publication 2 Image">
        <div class="publication-text">
          <h3>Polymorphism of microcrystalline urate oxidase from Aspergillus flavus</h3>
          <p>I. Collings, Y. Watier, M. Giffard, S. Dagogo, R. Kahn, F. Bonneté, J. P. Wright, A. N. Fitch, and I. Margiolaki, Acta Crystallogr. D, 66, 539–548, (2010). </p>
          <a href="https://journals.iucr.org/paper?S0907444910005354" target="_blank">Read More</a>
        </div>
      </div>
      <div style="height: 50px;"></div>
    </section>
  `,
  contact: `
    <section>
      <h1>Contact</h1>
      <div class="publication">
      <div class="publication-text">
        <p>For general inquiries about open positions or collaborations, please get in touch via email: ines.collings{at}nhm.ac.uk</p>
      </div>
      </div>
      <p>Postal Address: Department of Earth Sciences, Natural History Museum, Cromwell Road, South Kensington, London SW7 5BD</p>
      <a href="https://www.linkedin.com/in/ines-collings-9b564882/"target="_blank">LinkedIn</a>
    </section>
  `,
};

// Function to load content dynamically
function loadPage(page) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = pages[page] || pages.home;
}

// Add event listeners to navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const page = event.target.getAttribute("data-page");
    loadPage(page);
  });
});

// Load the home page by default
loadPage("home");
