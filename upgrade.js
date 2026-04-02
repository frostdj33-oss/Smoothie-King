(function() {
/* ================================================================
   SMOOTHIE KING #2431 -- SCOPE SUMMARY + EXPANDABLE ROWS + SOURCE LINKS
   Runs after 2500ms to follow all existing overlay scripts.
   ================================================================ */

/* -- 1. INJECT CSS ------------------------------------------------ */
var css = document.createElement('style');
css.id = 'scope-upgrade-css';
css.textContent = [
  '.div-scope-summary{background:rgba(45,28,10,0.5);border:1px solid var(--b4);border-radius:10px;padding:16px 20px;margin:12px 18px;font-size:13px;color:var(--tx2);line-height:1.7}',
  '.div-scope-summary .dss-header{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--acc2);font-weight:800;margin-bottom:8px}',
  '.div-scope-summary p{margin:0}',
  '.scope-expand{max-height:0;overflow:hidden;transition:max-height 0.3s ease;background:rgba(15,10,5,0.7);font-size:12px;font-style:italic;color:#8B7055;line-height:1.6}',
  '.scope-expand.open{max-height:500px}',
  '.scope-expand-inner{padding:10px 16px}',
  '.pricing-row.fixed{cursor:pointer;position:relative}',
  '.scope-chevron{display:inline-block;font-size:10px;color:var(--tx3);transition:transform 0.2s;margin-right:4px;flex-shrink:0}',
  '.scope-chevron.open{transform:rotate(90deg)}',
  '.src-link-new{font-size:.7rem;color:#4dabf7!important;text-decoration:none;margin-left:auto;opacity:.8;white-space:nowrap;flex-shrink:0}',
  '.src-link-new:hover{opacity:1;text-decoration:underline}'
].join('\n');
document.head.appendChild(css);

/* -- 2. HARDCODED DIVISION SUMMARIES ------------------------------ */
var divSummaries = {};
divSummaries['s01'] = 'GC provides full project administration for this 1,325 SF tenant build-out including building permit, 100% Performance and Payment Bond, and $250K minimum GL insurance naming Owner, Smoothie King Franchises Inc., and Landlord as additional insured (2021 IBC / 2020 NEC / 2018 APC). Full-time superintendent required for duration with temporary facilities including power, portable toilets, and dumpster. GC furnishes 5,000 lb minimum forklift for unloading millwork, refrigeration, and FF&E coordinated with Wasserstrom; provides sufficient temporary openings for large equipment delivery. Closeout includes O&M manuals, as-built drawings, all warranties, attic stock (1 carton each ceiling tile type, 1 quart each paint color, 1 set each bulb type), unconditional lien waivers, and one-year written warranty from substantial completion.';
divSummaries['s02'] = 'Exterior site work per Sheet A-1a includes furnishing and installing minimum 6 steel bollards (6" diameter, concrete-filled, painted per detail 2/A-1a) at drive-thru equipment locations with additional bollards as needed per Owner direction. Concrete pavement sealant at all paving joints with 1/2" expansion joint material and P-2a primer; 3/4" x 2\'-0" deep concrete-filled anchor pipes per detail 2/A-1a. Drive-thru lane layout coordinated with C3MS Signage Vendor (305-895-8485) for menu board canopy, pre-order board, height clearance bar, and speaker post locations per Sheets A-1a and A-9. Underground conduit includes 1-1/4" runs for all drive-thru cable/power and detector loop (72" PVC centered with menu board, 2" below grade) with 3/4" SCH 40 conduit to electrical panel per detail 6/A-9. Preserve all existing HC parking, ramps, signage; protect grease trap and dumpster enclosure throughout construction.';
divSummaries['s03'] = 'Structural scope per Sheets S1.1 and S1.2 (Engineer: Frank W. Neal & Assoc., Fort Worth TX, AR Firm Reg. 967) covers 4" slab on grade reinforced with #3 rebar at 14" OC both ways, 4,000 PSI concrete with sawed control joints at 12\'-0" OC maximum. At existing grade beam locations, field verify #4 dowels at 24" OC and connect per detail 2/S1.1; at existing slab, drill 6" into concrete with #3 x 1\'-6" epoxy dowels at 18" OC per detail 3/S1.1. Roof framing for new RTU-1 (1,200 lbs) includes L3x3x3/16 continuous curb support, L2x2x3/16 welded assembly with HSS 1-1/2 x 2-1/2 x 14GA blocking in deck flutes per details 3/S1.2 and 4/S1.2. All concentrated loads exceeding 100 lbs off panel points require L2x2x3/16 reinforcing per detail 2/S1.2. Landlord\'s roofer handles ALL roof penetrations to maintain warranty; GC provides all penetration requirements for refrigerant lines, bathroom vents, and plumbing vents.';
divSummaries['s04'] = 'Full interior partition build-out per Sheet A-2 including 3-5/8" metal studs at 16" OC maximum with cross-bracing to structure at 48" OC for walls not extending to structure. Drywall scope: 5/8" Type X standard partitions, 5/8" glass mat tile backer behind all tile locations, 5/8" Type X mold-resistant in wet areas with screw spacing 7" OC edges/ceilings, 8" OC walls, 4" OC wet areas per Sheet A-1. FRP panels (0.09" non-rated smooth) extend above drop ceiling in back-of-house with restaurant-compatible clear silicone at countertops, food zones, and wall intersections. Finish levels: Level 4 smooth (GA-214) in customer areas, Level 2 behind tile/FRP, Level 1 fire tape above ceilings; front-of-store painted with 3/8" nap roller for light orange peel. Fire-stopping for all assemblies per applicable codes and UL Listings; treated wood blocking in walls for all shelving units coordinated with Wasserstrom per detail 6/A-8.';
divSummaries['s05'] = 'Three doors total per Door Schedule Sheet A-2: Door 1 (3\'-0"x7\'-0" tempered glass in aluminum frame, front entry per detail 3/A-2), Door 2 (3\'-0"x7\'-0" solid core in hollow metal frame, restroom/office), and Door 3 (2\'-0"x7\'-8" existing rear exit to remain, painted to match exterior). Hardware groups: Group 2 (front entry closers, mortised cylinders with interchangeable core), Group 3 (restroom privacy closer, 1-1/2 pair hinges, mutes, floor stop, model 878/27 Mortset per detail 9/A2), Group 4 (rear exit panic/exit device, 30"x34" brushed metal kick plate, closers). Ready Access 275 drive-thru window per detail 1/A-9 \u2014 determine installation type before ordering. All door operations comply with ADA 4.27.4 (one hand, no tight grasping, max 5 lbs force) with 36" ADA clearance throughout sales pathway; surface-mounted double hooks on restroom door interiors.';
divSummaries['s06'] = 'Acoustical ceiling system per reflected ceiling plan Sheet A-4 with three tile types: CL-1 Frost ClimaPlus 24x24" angled edge with flat black exposed tee grid at 11\'-0" (customer area), CL-2 Natura ClimaPlus Healthzone 24x24" with white 9/16" grid at 11\'-0" (service/USDA-compliant antimicrobial), and CL-4 Sheetrock Lay-in 24x24" square edge with 15/16" grid at 10\'-0" (office). Drywall bulkhead at 7\'-2" AFF and soffits at 8\'-0" AFF painted P-1a (Ice Cube); drywall ceilings at 8\'-0" AFF in service area and restrooms. WD-1 wood soffit panel: prefinished red oak 7/8" x 4.5" face with satin finish applied vertically on 1/2" water-resistant OSB backing per soffit section detail 3/A-4 (Timeline Wood \u2014 Matt Stroud 218-561-2141). Diffusers and speakers in black ceiling area must not hang below grid and must be painted to match; return air grills beside bulkhead, NOT above powder table. Do NOT install ceiling tiles until building enclosed, minimum 60\u00b0F maintained, humidity below 40%, and all overhead work completed.';
divSummaries['s07'] = 'Complete flooring and finishes per Sheets A-6, A-7, A-8 including PC-1 polished concrete (AmeriPolish system \u2014 LM Howard Densifier, 400/800 ceramic diamonds, lithium silicate densifier, 1500 hair burnish) in service and back areas. Porcelain wall tile (WT-1/2/3, Creative Materials Corp / Architectural Alliance \u2014 Allison Piche 215-313-8012) floor-to-ceiling in restrooms with Schluter strip transitions (B-2 polished aluminum) and Dilex-ANK cove base at all floor-to-wall transitions. Base schedule: B-3 tile cove 6"x4" gray smooth, B-5 porcelain cove 12"x4" polished, B-6 stainless steel at millwork locations; VCT-2 luxury vinyl tile at designated areas. Paint: P-1a Sherwin Williams Ice Cube (SW discount code 3306-8521-9) on all walls/soffits/bulkheads with eggshell typical and semi-gloss wet areas, P-2a Passive accent, P-8 Floor White accents; white shiplap at bar front and service area wall per Sheets A-7/A-8.';
divSummaries['s08'] = 'FF&E vendor Wasserstrom (Tyler Greer 614-737-8963) provides and installs all cabinetry and furniture; GC responsible for all power/water connections, final electrical and plumbing hook-ups, and countertop grommets per Sheets A-6, A-7, A-8. Millwork sections include U-Wall (SS corner trim, white shiplap, FRP inside, SS toe kick per detail 1/A-8), POS section (Caesarstone Pure White 1141 top, 19" cash box shelf, 2" grommet per detail 2/A-8), SS blender sink (detail 3/A-8), and pay order/printer section (3/4" fir plywood, adjustable shelving per detail 4/A-8). GC installs treated wood blocking for retail shelving per detail 6/A-8 and provides restaurant-compatible clear silicone at all joints, countertops, and food zones. Wall murals: "Rule the Day" 216"x32" coordinated with Store Decor (John F. 972-463-4811) and Smoothie Bowl 64.5"Wx59.75"T per Sheet A-8; magnetic marker board 2\'x3\' in service area; sneeze guard blocking at bar counter.';
divSummaries['s09'] = 'Two restrooms (1 ADA guest, 1 employee) per Sheets A-3, A-8, A-10a-d complying with 2009 ICC A117.1 and 2018 Arkansas Plumbing Code \u2014 occupant load 27 total. Fixtures: white wall-hung ADA lavatory (front max 34" AFF, exposed pipes insulated per ADA), white elongated toilet with solid plastic open-front seat (centerline 16"-18" from wall, seat 17"-19" AFF). Grab bars: 36" minimum rear and 42" minimum side at 33"-36" AFF, 1-1/4" to 2" diameter, structural 250 lbs minimum per Section 609.8. Accessories per typical restroom elevation: wall mirror, paper towel dispenser, soap dispenser, sanitary napkin disposal, toilet paper dispenser (outlet 24"-42" from rear wall, 14"-19" AFF), and restroom signage with raised characters and braille per Section 703. Fire safety: fire extinguishers per Fire Marshal, Knox box per key note 2/A-1c, occupant load sign (max 27 persons) per key note 4/A-1c, and suite address numbers (4" min height, 1/2" stroke) per key note 3/A-1c.';
divSummaries['s10'] = 'Full plumbing per 2018 Arkansas Plumbing Code (C3 Consulting Engineers), Sheets P-2a, P-2b, P-4a \u2014 all utilities separately metered with backflow preventers on main supply. Under-floor rough-in with cast iron waste/drain (Mission joints, 1/8" per foot grease, 1/4" per foot sanitary), Type L hard-drawn copper above grade, Type K buried with 1" minimum fiberglass insulation; total loads approximately 14 DFUs sanitary, 38 DFUs grease, 335 MBH gas, 28 WSFUs cold water. Major equipment: Hoshizaki GW-1 tankless condensing water heater (100,000 BTU, 95% efficiency, 3/4" gas, direct vent), Grundfos Alpha HW 15-55F circulating pump, Western Purifier SK-HWF507 water filtration system, and grease trap (113 lbs capacity, 90-day pump-out). Floor drains with 3/4" trap primers at each location, thermostatic mixing valves (Watts LF-MM at all lavatories/hand sinks), mop sink (24"x24" floor level with backflow prevention), and ice machine plumbing (1/2" filtered water, condensate to indirect drain, refrigerant lines to roof condenser).';
divSummaries['s11'] = 'Mechanical/HVAC per 2021 Arkansas Mechanical Code and 2014 Arkansas Energy Code (C3 Consulting Engineers), Sheets M-2, M-4a, M-4b \u2014 engineered to Smoothie King standard of 1 ton per 200 SF. Trane RTU-01 YSX090 (7.5 tons, 480V/3-phase, R-410A, 88 MBH cooling/97 MBH heating, EER 11.0, 3 compressors, 16,559 CFM, 5-year compressor warranty) with 1,200 lb unit coordinated with structural Sheet S1.2. Ductwork: galvanized steel per SMACNA with R-8 insulation in exposed areas, R-0.85 minimum concealed; manual balancing dampers on all supply/return branches; diffusers and grilles per marks A-N on Sheet M-4a. Exhaust fans: EF-1 restroom 75 CFM (Greenheck SM-60 type, switched to light), EF-2 back area cabinet 150 CFM; 1" condensate drain to mop sink indirect. TAB by certified agency; fall arrest connectors per ANSI/ASSP Z359.1 for rooftop equipment within 10\' of edge.';
divSummaries['s12'] = 'Full electrical per 2020 Arkansas Electric Code (C3 Consulting Engineers), Sheets E-2, E-3, E-4a, E-4b \u2014 service: H1A main 480/277V 3-phase 4-wire from MSB, T-LA transformer 112.5 KVA (480/277V to 120/208V), Panel P 225A MLO 22 KAIC surface mount. Lighting: LED 4x4 recessed NORA NAROS2-WILES (customer area), 3\'x8\' LED panel GFP-9399050 (back area), 4\' LED can lights (soffit), Tech Lighting window pendants in black finish (canopy bar area); emergency LED exit signs Type Y with 90-min battery backup on separate breaker-locked circuit. Dimmer bank with occupancy sensors, power packs, and LED dimmers; TC-1 Tork 365 interior timeclock, TC-2 exterior signage timeclock with breaker locks. All devices/receptacles white, GFCI in wet areas, tamper-proof throughout; conduit EMT in exposed areas parallel to structure; drive-thru conduit (3x 3/4" SCH 40 to menu board, panel, pre-order); cabinet wiring harness routing coordinated with Wasserstrom per Sheet A-5b.';
divSummaries['s13'] = 'Low voltage and data per Sheets A-5b, A-5c, E-3 \u2014 all conduits 1.5" minimum with pull strings and comm boxes by GC; SK vendor responsible for all cabling and terminations. 20 CAT-6 plenum rated cables (ANSI/TIA/EIA 568B, white jacket, no splices, 6\' spare each end) from office patch panel to all locations: order/pay counter, drive-thru counter, sticky printer, digital menu boards, digital posters, and desk. HME drive-thru system (Chris Niyahisa 858-644-8803): headsets, vehicle detection, magnetic loop \u2014 coordinate early shipment; C3MS store music system (Jodi Hnand 360-892-5480) with speakers shifted to avoid black ceiling grid. Bad door entry alarm Detex EAX-500 on rear exit; 2x4 J-box for wireless base, NEXEO base, timer, and optional Nitro leaderboard screen per detail 4/A-5b. All audio cabling separate from data/power conduit; telephone riser with minimum 5 conductors per detail 4/E-4b.';
divSummaries['s14'] = 'Complete drive-thru system per Sheet A-9 with all equipment locations field-determined; C3MS signage vendor (JMI 305-895-8485) installs all drive-thru equipment. Menu board (F1): wall-mounted exterior with 6" steel bollard/concrete fill at detector loop, 72" PVC loop centered 2" below grade, conduit runs (3x 3/4" SCH 40) per detail 6/A-9; pre-order board (F28) required unless site does not allow. Ready Access 275 drive-thru window per detail 1/A-9 \u2014 GC frames rough opening per specs; determine installation type (wood or masonry framing) before ordering. Canopy/awning: extruded aluminum soffit deck with full perimeter gutter, double 2X blocking at all attachment points with thru-wall flashing per detail 7/A-9. Height clearance bar (F16) required; HME magnetic detector loop provided by HME with GC conduit installation; 1-1/4" underground conduit for all drive-thru cable/power; installation sequence coordinated through 5 phases from rough opening to final signage vendor install.';
divSummaries['s15'] = 'GC-scope equipment connections per Sheet A-5a \u2014 all equipment furnished by FF&E unless noted, GC responsible for all plumbing connections, electrical connections, and permits. Hoshizaki IM-400MAJ ice machine (22"W x 32.75"H x 27.875"D) and B-700PF storage bin (44"W x 33.875"D x 44"H) with certified Hoshizaki installer for remote condenser, refrigerant lines, and startup; remote condenser on roof coordinated with Landlord\'s roofer. Kitchen equipment: TurboChef SOTA convection oven (NEMA 6-30R), Master-Bilt DC-40 dipping freezer (3.2A/115V), Turbo Air PST-72 reach-in refrigerator (5.7A/115V dedicated circuit), Turbo Air TBF-7200-N reach-in freezer (2 units on casters). Additional: online order pickup refrigerator (E2/E3), water table FR29-79 with plumbing and electrical, personal computer (E8) with dedicated circuit per Sheet E-3, automatic hand dispenser VTA-404. Equipment delivery may require temporary storefront removal; optional SK Open Sign is the only approved open sign per A-5a note.';
divSummaries['s16'] = 'Complete graphics and signage per Sheets A-5b, A-7, A-8 \u2014 GC installs interior graphics (C3MS): bone board inserts 8.5"x17", restroom signage 12-3/4"x6", must wash hands 8-1/4"x2-1/2", interior posters 36"x24", and display kiosk/truck decal. Signage vendor (C3MS \u2014 JMI 305-895-8485) installs vinyl day graphics, Rule the Day and Smoothie Bowl murals (coordinated with Store Decor \u2014 John F. 972-463-4811), and all exterior signage. 3 interior digital menu boards (Samsung/Dacor 43"x24", dedicated 20A circuit each) above bar per Sheet A-7; pre-order menu board by Colormark with GC conduit/electrical only. Everbrite building canopy signage (David Jackman 402-435-9579) requires GC blocking and conduit; illuminated signage on 20A dedicated circuit to A-box. All exterior signage on timeclock TC-2 with breaker locks; GC ensures all walls/ceilings/finishes complete and approved before any graphics vendor arrives on site.';

/* -- 3. SCOPE NOTES PER LINE ITEM (keys = decoded getAttribute values) */
var scopeNotes = {};
/* DIV 01 */
scopeNotes['General Conditions / Superintendent'] = 'Full-time superintendent required for duration of project. Coordinate all trades and sub-contractors; comply with all local municipality requirements for this 1,325 SF tenant build-out.';
scopeNotes['Building Permit & All Inspection Fees'] = 'Obtain and post building permit in visible location. Pay all permit and inspection fees per City of Russellville AR requirements (2021 IBC / 2020 NEC / 2018 APC).';
scopeNotes['Performance & Payment Bond (100% of contract)'] = 'Provide 100% Performance and Payment Bond for full contract value per Owner and Landlord requirements.';
scopeNotes['Insurance \u2014 GL, Auto, Workers Comp'] = 'Provide Certificate of Insurance: $250,000 minimum GL naming Owner, Smoothie King Franchises Inc., and Landlord as additional insured. Workers\u2019 Comp per Arkansas state requirements; Auto Liability with same limits as GL.';
scopeNotes['Temporary Facilities \u2014 Power, Toilets, Dumpster'] = 'Provide temporary facilities throughout project including temporary power, lighting, portable toilets, and dumpster for all construction debris.';
scopeNotes['Equipment Delivery Coordination & Forklift'] = 'Provide 5,000 lb minimum forklift and hand-truck for unloading and installing millwork, refrigeration, freezers, and FF&E. Coordinate delivery access with Wasserstrom.';
scopeNotes['Final Clean & Attic Stock Delivery'] = 'Provide final clean throughout entire suite prior to Owner arrival. Provide attic stock: 1 carton each ceiling tile type, 1 quart each paint color (labeled), 1 carton each tile type, 1 set each bulb type.';
scopeNotes['Closeout Package \u2014 As-Builts, O&M Manuals, Warranties, Lien Waivers'] = 'Provide closeout package including O&M manuals, as-built drawings, all system warranties, all keys to premises, and unconditional lien waivers upon completion. One-year written warranty from substantial completion.';
scopeNotes['GC Fee / Overhead & Profit'] = 'GC overhead and profit for full project coordination, administration, and management of this 1,325 SF Smoothie King tenant build-out.';
/* DIV 02 */
scopeNotes['6" Steel Bollards \u2014 concrete filled, painted'] = 'Furnish and install minimum 6 steel bollards, 6" diameter, concrete-filled, painted per detail 2/A-1a at drive-thru equipment locations. Additional bollards as needed per Owner direction.';
scopeNotes['Concrete Paving Sealant & Expansion Joint Material'] = 'Concrete pavement sealant at all paving joints with 1/2" expansion joint material and P-2a primer. 3/4" x 2\'-0" deep concrete-filled anchor pipes per detail 2/A-1a.';
scopeNotes['Underground Conduit \u2014 1-1/4" for Drive-Thru Cable/Power'] = 'Underground conduit 1-1/4" runs for all drive-thru cable/power with 3/4" SCH 40 conduit to electrical panel per detail 6/A-9.';
scopeNotes['Detector Loop \u2014 72" PVC w/ Loop, 3/4" SCH 40 Conduit to Panel'] = 'Detector loop: 72" PVC centered with menu board, 2" below grade, with 3/4" SCH 40 conduit to electrical panel per detail 6/A-9.';
scopeNotes['HC Parking Protection & Restoration (if damaged)'] = 'Preserve all existing HC parking, ramps, and signage. Protect grease trap and dumpster enclosure throughout construction; restore if damaged.';
scopeNotes['Site Work Labor \u2014 Bollards, Conduit, Sealant, HC Protection'] = 'All labor for exterior site work including bollard installation, underground conduit trenching and backfill, concrete paving sealant, and HC parking protection per Sheet A-1a.';
/* DIV 03 */
scopeNotes['Concrete \u2014 4" Slab on Grade, 4,000 PSI'] = '4" slab on grade reinforced with #3 rebar at 14" OC both ways, 4,000 PSI concrete with sawed control joints at 12\'-0" OC maximum per Sheet S1.1.';
scopeNotes['Rebar \u2014 #3 @ 14" OC Both Ways'] = '#3 rebar at 14" OC both ways for 4" slab on grade per structural Sheet S1.1. Field verify existing conditions before placement.';
scopeNotes['Epoxy Grout & Dowels \u2014 #3 x 1\'-6" @ 18" OC'] = 'At existing slab, drill 6" into concrete with #3 x 1\'-6" epoxy dowels at 18" OC per detail 3/S1.1. At grade beams, field verify #4 dowels at 24" OC per detail 2/S1.1.';
scopeNotes['RTU Roof Opening Framing \u2014 L3x3x3/16 Steel Angles'] = 'Roof framing for new RTU-1 (1,200 lbs) includes L3x3x3/16 continuous curb support per details 3/S1.2 and 4/S1.2.';
scopeNotes['Mechanical Curb Support \u2014 HSS Blocking & L2x2 Welded Assembly'] = 'L2x2x3/16 welded assembly with HSS 1-1/2 x 2-1/2 x 14GA blocking in deck flutes per detail 4/S1.2 for RTU curb support.';
scopeNotes['Concentrated Load Framing \u2014 L2x2x3/16 Joist Reinforcing'] = 'All concentrated loads exceeding 100 lbs off panel points require L2x2x3/16 reinforcing per detail 2/S1.2.';
scopeNotes['Slab Demo & Trench Excavation for Under-Floor Plumbing'] = 'Saw-cut and remove existing slab sections, excavate trenches for all under-floor plumbing rough-in, and backfill per structural requirements.';
scopeNotes['Roof Penetrations \u2014 Landlord Roofer Coordination & Cost'] = 'Landlord\'s roofer handles ALL roof penetrations to maintain warranty. GC provides all penetration requirements for refrigerant lines, bathroom vents, and plumbing vents.';
scopeNotes['Structural Labor \u2014 Slab, Forming, Steel, Roof Framing'] = 'All structural labor for slab on grade, forming, steel angle and HSS framing, rebar placement, epoxy dowels, and roof framing per Sheets S1.1 and S1.2.';
/* DIV 04 */
scopeNotes['Metal Stud Framing \u2014 3-5/8" 16" OC'] = 'Full interior partition build-out per Sheet A-2: 3-5/8" metal studs at 16" OC maximum with cross-bracing to structure at 48" OC for walls not extending to structure.';
scopeNotes['5/8" Type X Drywall \u2014 Standard Partitions'] = '5/8" Type X drywall on standard partitions. Finish Level 4 smooth (GA-214) in customer areas, Level 1 fire tape above ceilings. Screw spacing 8" OC walls per Sheet A-1.';
scopeNotes['5/8" Glass Mat Tile Backer \u2014 Wet & Tile Areas'] = '5/8" glass mat tile backer behind all tile locations per Sheet A-1. Level 2 finish behind tile areas.';
scopeNotes['5/8" Type X Mold-Resistant Drywall \u2014 Wet Areas'] = '5/8" Type X mold-resistant drywall in wet areas with screw spacing 7" OC edges/ceilings, 4" OC wet areas per Sheet A-1.';
scopeNotes['0.09" Non-Rated Smooth FRP Panels'] = 'FRP panels (0.09" non-rated smooth) extend above drop ceiling in back-of-house with restaurant-compatible clear silicone at countertops, food zones, and wall intersections.';
scopeNotes['Insulation \u2014 Batt, Sound & Thermal at Rated Walls'] = 'Batt insulation for sound and thermal performance at all rated walls and partitions per plan requirements.';
scopeNotes['Joint Compound, Corner Bead & Control Joints'] = 'All joint compound, corner bead, and control joints for drywall finishing. Front-of-store painted with 3/8" nap roller for light orange peel texture.';
scopeNotes['Blocking \u2014 Treated Wood for Shelving & Millwork Walls'] = 'Treated wood blocking in walls for all shelving units coordinated with Wasserstrom per detail 6/A-8.';
scopeNotes['Fire-Stop System \u2014 All Wall, Ceiling & Roof Penetrations'] = 'Fire-stopping for all assemblies per applicable codes and UL Listings at all wall, ceiling, and roof penetrations.';
scopeNotes['Restaurant-Compatible Clear Silicone Sealant \u2014 FRP & Millwork'] = 'Restaurant-compatible clear silicone at all FRP joints, countertops, food zones, and wall intersections throughout back-of-house.';
scopeNotes['Framing, Drywall, FRP & Finish Labor'] = 'All labor for metal stud framing, drywall hanging/taping/finishing, FRP installation, insulation, fire-stopping, and silicone sealant per Sheets A-1, A-2.';
/* DIV 05 */
scopeNotes['Door 1 \u2014 3\'x7\' Tempered Glass / Aluminum Frame (Front Entry)'] = 'Door 1: 3\'-0"x7\'-0" tempered glass in aluminum frame, front entry per detail 3/A-2 in Door Schedule Sheet A-2.';
scopeNotes['Door 2 \u2014 3\'x7\' Solid Core / HM Frame Painted (Restroom/Office)'] = 'Door 2: 3\'-0"x7\'-0" solid core in hollow metal frame, restroom/office per Door Schedule Sheet A-2.';
scopeNotes['Door 3 \u2014 Existing Rear Exit Door Paint & Hardware Update'] = 'Door 3: 2\'-0"x7\'-8" existing rear exit to remain, painted to match exterior. Hardware Group 4 applied.';
scopeNotes['Drive-Thru Window \u2014 Ready Access 275'] = 'Ready Access 275 drive-thru window per detail 1/A-9. Determine installation type (wood or masonry framing) before ordering.';
scopeNotes['Hardware Group 2 \u2014 Front Entry Closer, Mortised Cylinder, Lockset'] = 'Hardware Group 2 for front entry: closers, mortised cylinders with interchangeable core. ADA compliant (one hand, no tight grasping, max 5 lbs force).';
scopeNotes['Hardware Group 3 \u2014 Restroom Privacy Closer, Hinges, Mutes, Floor Stop'] = 'Hardware Group 3 for restroom: privacy closer, 1-1/2 pair hinges, mutes, floor stop, model 878/27 Mortset per detail 9/A2.';
scopeNotes['Hardware Group 4 \u2014 Rear Exit Panic Device, Closer, Kick Plate, Hinges'] = 'Hardware Group 4 for rear exit: panic/exit device, 30"x34" brushed metal kick plate, closers per Door Schedule.';
scopeNotes['Surface-Mounted Double Hook \u2014 Restroom Doors (2 EA)'] = 'Surface-mounted double hooks on restroom door interiors, 2 each.';
scopeNotes['Door Paint \u2014 All HM Doors & Frames, 2 Finish Coats'] = 'Paint all hollow metal doors and frames with 2 finish coats to match specified color schedule.';
scopeNotes['Door, Frame, Hardware & Drive-Thru Window Install Labor'] = 'All labor for door/frame setting, hardware installation, drive-thru window framing and install, and door painting per Door Schedule Sheet A-2.';
/* DIV 06 */
scopeNotes['CL-1 Frost ClimaPlus 24x24" Tile \u2014 Black Exposed Grid (Customer Area)'] = 'CL-1 Frost ClimaPlus 24x24" angled edge tile with flat black exposed tee grid at 11\'-0" AFF in customer area per reflected ceiling plan Sheet A-4.';
scopeNotes['CL-2 Natura ClimaPlus Healthzone 24x24" Tile \u2014 White 9/16" Grid (Service)'] = 'CL-2 Natura ClimaPlus Healthzone 24x24" USDA-compliant antimicrobial tile with white 9/16" grid at 11\'-0" AFF in service area per Sheet A-4.';
scopeNotes['CL-4 Sheetrock Lay-In 24x24" Square Edge Tile \u2014 White 15/16" Grid (Office)'] = 'CL-4 Sheetrock Lay-in 24x24" square edge tile with 15/16" grid at 10\'-0" AFF in office per Sheet A-4.';
scopeNotes['Suspended Grid System \u2014 Black Exposed Tee (Customer Area)'] = 'Flat black exposed tee grid system for customer area at 11\'-0" AFF. Diffusers and speakers must not hang below grid and must be painted to match.';
scopeNotes['Suspended Grid System \u2014 White 9/16" Exposed Tee (Service Area)'] = 'White 9/16" exposed tee grid system for service area at 11\'-0" AFF per reflected ceiling plan Sheet A-4.';
scopeNotes['Drywall Bulkhead & Soffits \u2014 Frame, Hang, Tape, Finish, Paint P-1a'] = 'Drywall bulkhead at 7\'-2" AFF and soffits at 8\'-0" AFF painted P-1a (Ice Cube). Return air grills beside bulkhead, NOT above powder table.';
scopeNotes['WD-1 Prefinished Red Oak Soffit Panel \u2014 7/8" x 4.5" x 7\'-0" Satin Finish'] = 'WD-1 wood soffit panel: prefinished red oak 7/8" x 4.5" face with satin finish applied vertically per soffit section detail 3/A-4 (Timeline Wood \u2014 Matt Stroud 218-561-2141).';
scopeNotes['1/2" Water-Resistant OSB & MDF Soffit Backing'] = '1/2" water-resistant OSB backing for WD-1 wood soffit panels per detail 3/A-4.';
scopeNotes['FR-4 Water-Resistant Primer & Paint \u2014 Soffit Prep Coat'] = 'FR-4 water-resistant primer and paint as soffit prep coat before wood panel installation.';
scopeNotes['Drywall Ceiling \u2014 Service Area, Restrooms & Back Area at 8\'-0" AFF'] = 'Drywall ceilings at 8\'-0" AFF in service area and restrooms. Do NOT install ceiling tiles until building enclosed, minimum 60\u00b0F, humidity below 40%.';
scopeNotes['Ceiling, Grid, Tile, Soffit, Bulkhead & Wood Panel Install Labor'] = 'All labor for ceiling grid installation, tile placement, soffit framing, bulkhead construction, and WD-1 wood panel installation per Sheet A-4.';
/* DIV 07 */
scopeNotes['PC-1 Polished Concrete \u2014 AmeriPolish System (Service & Back Areas)'] = 'PC-1 polished concrete using AmeriPolish system: LM Howard Densifier, 400/800 ceramic diamonds, lithium silicate densifier, 1500 hair burnish in service and back areas.';
scopeNotes['WT-1 Porcelain Wall Tile \u2014 Floor to Ceiling Restrooms'] = 'WT-1 porcelain wall tile floor-to-ceiling in restrooms. Creative Materials Corp / Architectural Alliance \u2014 Allison Piche 215-313-8012.';
scopeNotes['WT-2 & WT-3 Wall Tile \u2014 Wet Walls & Grab Bar Areas'] = 'WT-2 and WT-3 porcelain wall tile at wet walls and grab bar areas per finish plan Sheets A-6, A-7.';
scopeNotes['VCT-2 Luxury Vinyl Tile \u2014 Designated Areas per Finish Plan'] = 'VCT-2 luxury vinyl tile at designated areas per finish plan per Sheets A-6, A-7.';
scopeNotes['B-2 Schluter Strip \u2014 Polished Aluminum Tile Transition'] = 'B-2 Schluter strip polished aluminum transition at all tile-to-other-material transitions per finish plan.';
scopeNotes['B-3 Tile Cove Base \u2014 6"x4" Gray Smooth'] = 'B-3 tile cove base 6"x4" gray smooth at designated locations per base schedule.';
scopeNotes['B-5 Porcelain Cove Base \u2014 12"x4" Polished'] = 'B-5 porcelain cove base 12"x4" polished at designated locations per base schedule.';
scopeNotes['B-6 Stainless Steel Base \u2014 Millwork & Bar Counter Locations'] = 'B-6 stainless steel base at millwork and bar counter locations per base schedule.';
scopeNotes['Thinset Mortar \u2014 Floor & Wall Tile'] = 'Thinset mortar for all floor and wall tile installations per manufacturer recommendations.';
scopeNotes['Grout \u2014 All Tile Joints; Grout Sealer upon Completion'] = 'Grout all tile joints with grout sealer applied upon completion per manufacturer specifications.';
scopeNotes['Schluter Dilex-ANK \u2014 Floor to Wall Cove Transition'] = 'Schluter Dilex-ANK cove base profile at all floor-to-wall transitions per finish details.';
scopeNotes['P-1a Sherwin Williams Ice Cube \u2014 All Walls, Soffits, Bulkheads (2 Coats)'] = 'P-1a Sherwin Williams Ice Cube on all walls, soffits, and bulkheads with 2 coats. Eggshell typical, semi-gloss in wet areas. SW discount code 3306-8521-9.';
scopeNotes['P-2a Sherwin Williams Passive + P-8 Floor White \u2014 Accent Areas'] = 'P-2a Sherwin Williams Passive accent color and P-8 Floor White accents at designated areas per Sheets A-7/A-8.';
scopeNotes['White Shiplap \u2014 Bar Front & Service Area Wall per Elevations A-7/A-8'] = 'White shiplap at bar front and service area wall per elevation details Sheets A-7/A-8.';
scopeNotes['Silicone Caulk \u2014 Restaurant Compatible Clear at All Tile & Material Transitions'] = 'Restaurant-compatible clear silicone caulk at all tile-to-material transitions, countertops, and food zones throughout.';
scopeNotes['Flooring, Tile, Base, Paint & Shiplap Install Labor'] = 'All labor for polished concrete, wall tile, floor tile, base installation, painting, and shiplap installation per Sheets A-6, A-7, A-8.';
/* DIV 08 */
scopeNotes['GC Power & Water Rough-In to All Millwork Locations'] = 'GC responsible for all power and water rough-in connections to millwork locations per Sheets A-6, A-7, A-8. FF&E vendor Wasserstrom provides all cabinetry.';
scopeNotes['GC Final Electrical Hook-Ups \u2014 All Millwork & Cabinet Wiring Harness Connections'] = 'GC final electrical hook-ups for all millwork and cabinet wiring harness connections coordinated with Wasserstrom (Tyler Greer 614-737-8963).';
scopeNotes['GC Final Plumbing Hook-Ups \u2014 All Sinks & Equipment in Millwork'] = 'GC final plumbing hook-ups for all sinks and equipment in millwork sections including SS blender sink per detail 3/A-8.';
scopeNotes['Counter Top Grommets \u2014 All Millwork Electrical Penetrations'] = 'Countertop grommets (2" diameter) at all millwork electrical penetrations per POS section detail 2/A-8.';
scopeNotes['Treated Wood Blocking \u2014 All Shelving & Millwork Wall Locations'] = 'GC installs treated wood blocking for retail shelving per detail 6/A-8 at all shelving and millwork wall locations.';
scopeNotes['Restaurant-Compatible Clear Silicone \u2014 All Millwork Joints, Countertops & Food Zones'] = 'Restaurant-compatible clear silicone at all millwork joints, countertops, and food zones. Applied at U-Wall, POS section, and all cabinetry seams.';
scopeNotes['Magnetic Marker Board 2\'x3\' \u2014 Supply & Install with Wall Blocking'] = 'Magnetic marker board 2\'x3\' in service area. Supply, install with wall blocking.';
scopeNotes['"Rule the Day" Wall Mural \u2014 216"x32" Install Coordination'] = '"Rule the Day" wall mural 216"x32" coordinated with Store Decor (John F. 972-463-4811) per Sheet A-8.';
scopeNotes['Smoothie Bowl Wall Mural \u2014 64.5"W x 59.75"T Install Coordination'] = 'Smoothie Bowl wall mural 64.5"W x 59.75"T coordinated with Store Decor per Sheet A-8.';
scopeNotes['GC Millwork Coordination, Hook-Ups, Blocking & Mural Install Labor'] = 'All GC labor for millwork coordination with Wasserstrom, power/water/plumbing hook-ups, blocking installation, and mural install coordination.';
/* DIV 09 */
scopeNotes['ADA Wall-Hung Lavatory \u2014 White w/ ADA Faucet (2 EA)'] = 'White wall-hung ADA lavatory, front max 34" AFF, exposed pipes insulated per ADA. 2 total (1 ADA guest restroom, 1 employee).';
scopeNotes['White Elongated Toilet \u2014 Solid Plastic Open Front Seat (2 EA)'] = 'White elongated toilet with solid plastic open-front seat, centerline 16"-18" from wall, seat 17"-19" AFF. 2 total.';
scopeNotes['ADA Grab Bars \u2014 36" Rear + 42" Side (2 Sets)'] = 'Grab bars: 36" minimum rear and 42" minimum side at 33"-36" AFF, 1-1/4" to 2" diameter, structural 250 lbs minimum per Section 609.8.';
scopeNotes['Toilet Paper Dispenser \u2014 ADA Compliant (2 EA)'] = 'ADA compliant toilet paper dispenser, outlet 24"-42" from rear wall, 14"-19" AFF per Section 604.7. 2 each.';
scopeNotes['Wall Mirror \u2014 Each Restroom (2 EA)'] = 'Wall mirror per typical restroom elevation, 2 each (1 per restroom).';
scopeNotes['Paper Towel Dispenser (2 EA)'] = 'Paper towel dispenser per typical restroom elevation and ADA reach range requirements. 2 each.';
scopeNotes['Soap Dispenser (2 EA)'] = 'Soap dispenser per typical restroom elevation and ADA reach range requirements. 2 each.';
scopeNotes['Sanitary Napkin Disposal (2 EA)'] = 'Sanitary napkin disposal per typical restroom elevation. 2 each.';
scopeNotes['ADA Pipe Insulation \u2014 All Exposed Lavatory Supply & Drain Lines'] = 'Insulate all exposed lavatory supply and drain pipes per ADA requirements to prevent contact burns.';
scopeNotes['Restroom Signage \u2014 Raised Characters + Braille, ADA Compliant (2 EA)'] = 'Restroom signage with raised characters and braille per Section 703. 2 each.';
scopeNotes['Fire Extinguishers \u2014 Quantity & Type per Fire Marshal'] = 'Fire extinguishers per Fire Marshal requirements, quantity and type as directed.';
scopeNotes['Knox Box with Key \u2014 Location per Fire Marshal'] = 'Knox box per key note 2/A-1c, location per Fire Marshal direction.';
scopeNotes['Occupant Load Sign \u2014 Max 27 Persons, Conspicuous Location'] = 'Occupant load sign (max 27 persons) per key note 4/A-1c in conspicuous location.';
scopeNotes['Suite Address Numbers \u2014 4" Min Height, 1/2" Stroke, Exterior'] = 'Suite address numbers, 4" minimum height, 1/2" stroke per key note 3/A-1c on exterior.';
scopeNotes['Restroom Accessories, Signage, Fire Extinguisher & Knox Box Install Labor'] = 'All labor for restroom accessory installation, signage, fire extinguisher and Knox box mounting per Sheets A-3, A-8, A-10a-d.';
/* DIV 10 */
scopeNotes['Under-Floor Plumbing \u2014 Rough-In, Trenching & Backfill'] = 'Under-floor rough-in with cast iron waste/drain (Mission joints, 1/8" per foot grease, 1/4" per foot sanitary) per Sheets P-2a, P-2b.';
scopeNotes['Above-Floor Plumbing \u2014 All Supply, Waste & Vent Piping'] = 'Type L hard-drawn copper above grade, Type K buried with 1" minimum fiberglass insulation. Total loads ~14 DFUs sanitary, 38 DFUs grease, 28 WSFUs cold water.';
scopeNotes['Hoshizaki GW-1 Tankless Condensing Water Heater'] = 'Hoshizaki GW-1 tankless condensing water heater: 100,000 BTU, 95% efficiency, 3/4" gas, direct vent per Sheet P-2a.';
scopeNotes['Grundfos Alpha HW 15-55F Circulating Pump'] = 'Grundfos Alpha HW 15-55F circulating pump for hot water recirculation system.';
scopeNotes['Western Purifier SK-HWF507 Water Filtration System'] = 'Western Purifier SK-HWF507 water filtration system per plumbing plan specifications.';
scopeNotes['Grease Trap \u2014 113 lbs Capacity, Connect to Existing Line'] = 'Grease trap with 113 lbs capacity, 90-day pump-out cycle. Connect to existing grease line.';
scopeNotes['Floor Drains, Floor Sinks & Hub Drains \u2014 All Locations per P-2a'] = 'Floor drains, floor sinks, and hub drains at all locations per Sheet P-2a with 3/4" trap primers at each location.';
scopeNotes['Trap Primers \u2014 3/4" Screw Line to Each Floor Drain/Sink/Hub'] = '3/4" trap primers at each floor drain, floor sink, and hub drain location to maintain trap seal.';
scopeNotes['Thermostatic Mixing Valves \u2014 Watts LF-MM Series at All Lavatories & Hand Sinks'] = 'Watts LF-MM thermostatic mixing valves at all lavatories and hand sinks per plumbing code requirements.';
scopeNotes['Backflow Preventers \u2014 Main Supply & Mop Sink'] = 'Backflow preventers on main water supply and mop sink. All utilities separately metered per 2018 Arkansas Plumbing Code.';
scopeNotes['New Gas Meter & Gas Piping \u2014 ~335 MBH Total Load'] = 'New gas meter and gas piping for approximately 335 MBH total load including water heater and any gas equipment.';
scopeNotes['Cold Water Connection \u2014 Existing Line, ~28 WSFUs Total Load'] = 'Cold water connection from existing line, approximately 28 WSFUs total load per plumbing fixture schedule.';
scopeNotes['Ice Machine Plumbing \u2014 1/2" Filtered Water, Condensate to Indirect Drain'] = 'Ice machine plumbing: 1/2" filtered water supply, condensate to indirect drain, refrigerant lines to roof condenser.';
scopeNotes['Mop Sink \u2014 24"x24" Floor Level w/ Backflow Prevention'] = 'Mop sink 24"x24" floor level with backflow prevention per 2018 Arkansas Plumbing Code.';
scopeNotes['Plumbing Fixture Schedule \u2014 All Sinks, Faucets & Accessories per A-3'] = 'All plumbing fixtures per fixture schedule Sheet A-3 including sinks, faucets, and accessories.';
scopeNotes['Pipe Insulation \u2014 All Hot & Cold Exposed & Accessible Piping'] = 'Pipe insulation on all hot and cold exposed and accessible piping, 1" minimum fiberglass.';
scopeNotes['Full Plumbing Labor \u2014 Under-Floor, Above-Floor, Fixtures & Equipment'] = 'All plumbing labor for under-floor and above-floor piping, fixture installation, equipment connections, and testing per 2018 Arkansas Plumbing Code.';
/* DIV 11 */
scopeNotes['Trane RTU-01 YSX090 \u2014 7.5 Ton, 480V/3-Phase, R-410A'] = 'Trane RTU-01 YSX090: 7.5 tons, 480V/3-phase, R-410A, 88 MBH cooling/97 MBH heating, EER 11.0, 3 compressors, 5-year compressor warranty. 1,200 lb unit coordinated with Sheet S1.2.';
scopeNotes['RTU Curb & Roof Mounting \u2014 Coordinate w/ Landlord Roofer'] = 'RTU curb and roof mounting coordinated with Landlord\'s roofer to maintain roof warranty. Structural support per Sheet S1.2.';
scopeNotes['Supply & Return Ductwork \u2014 Galvanized Steel, All Sizes per M-2'] = 'Galvanized steel ductwork per SMACNA standards, all sizes per Sheet M-2. Manual balancing dampers on all supply/return branches.';
scopeNotes['Duct Insulation \u2014 R-8 Exposed / R-0.85 Min Concealed'] = 'Duct insulation R-8 in exposed areas, R-0.85 minimum concealed per 2014 Arkansas Energy Code.';
scopeNotes['Diffuser & Grille Schedule \u2014 All Marks A thru N per M-4a'] = 'Diffusers and grilles per marks A through N on Sheet M-4a. In black ceiling area, must not hang below grid and must be painted to match.';
scopeNotes['Manual Balancing Dampers \u2014 All Supply & Return Branches'] = 'Manual balancing dampers on all supply and return branches for proper airflow distribution.';
scopeNotes['Thermostats \u2014 1-Stage Heat/Cool w/ Manual Changeover & Clear Locked Cover'] = '1-stage heat/cool thermostat with manual changeover and clear locked cover per mechanical plan.';
scopeNotes['EF-1 Restroom Exhaust Fan \u2014 75 CFM, Vent to Exterior, Switch to Light'] = 'EF-1 restroom exhaust fan: 75 CFM, Greenheck SM-60 type, vented to exterior, switched to light.';
scopeNotes['EF-2 Back Area Cabinet Exhaust Fan \u2014 150 CFM'] = 'EF-2 back area cabinet exhaust fan: 150 CFM per Sheet M-4a.';
scopeNotes['Condensate Drain Line \u2014 1" Down in Wall to Mop Sink Indirect'] = '1" condensate drain line down in wall to mop sink indirect connection.';
scopeNotes['TAB \u2014 Test, Adjust & Balance Report by Certified Agency'] = 'TAB (Test, Adjust & Balance) by certified agency with written report per SMACNA standards.';
scopeNotes['Fall Arrest / Restraint Anchorage Connectors \u2014 RTU Roof Access'] = 'Fall arrest/restraint anchorage connectors per ANSI/ASSP Z359.1 for rooftop equipment within 10\' of edge.';
scopeNotes['Full Mechanical Labor \u2014 RTU, Ductwork, Exhaust, Controls & TAB'] = 'All mechanical labor for RTU installation, ductwork, exhaust fans, controls, and TAB per 2021 Arkansas Mechanical Code.';
/* DIV 12 */
scopeNotes['Service Entrance \u2014 Extend Conduit from Landlord MSB to New Tenant Meter'] = 'Extend conduit from Landlord MSB (main switchboard) to new tenant meter per Sheet E-2.';
scopeNotes['H1A Main Distribution Panel \u2014 480/277V 3-Phase 4-Wire'] = 'H1A main distribution panel: 480/277V 3-phase 4-wire from MSB per Sheet E-2.';
scopeNotes['T-LA Transformer \u2014 112.5 KVA, 480/277V to 120/208V 3-Phase'] = 'T-LA transformer: 112.5 KVA step-down from 480/277V to 120/208V 3-phase per Sheet E-2.';
scopeNotes['Panel P \u2014 225A MLO, 22 KAIC, 120/208V 3-Phase, Surface Mount'] = 'Panel P: 225A MLO, 22 KAIC, 120/208V 3-phase, surface mount per Sheet E-4b.';
scopeNotes['Branch Circuit Wiring \u2014 All Circuits per Panel P Schedule E-4b'] = 'All branch circuit wiring per Panel P schedule Sheet E-4b. Conduit EMT in exposed areas parallel to structure.';
scopeNotes['LED Recessed Down Lights \u2014 NORA NAROS2-WILES (Customer Area)'] = 'LED 4x4 recessed downlights NORA NAROS2-WILES in customer area per lighting plan Sheet E-3.';
scopeNotes['3\'x8\' LED Panel \u2014 GFP-9399050 Standard White (Back Area)'] = '3\'x8\' LED panel GFP-9399050 standard white in back area per lighting plan Sheet E-3.';
scopeNotes['4\' LED Can Lights \u2014 Contractor Source, Overhead Soffit & Community Table'] = '4\' LED can lights, contractor source, at overhead soffit and community table locations per Sheet E-3.';
scopeNotes['Tech Lighting Window Pendant \u2014 Black Finish, Over Canopy Bar Area'] = 'Tech Lighting window pendants in black finish over canopy bar area per lighting plan Sheet E-3.';
scopeNotes['Emergency Exit Signs \u2014 LED Type Y, Battery Backup, Breaker Lock Circuit'] = 'Emergency LED exit signs Type Y with 90-minute battery backup on separate breaker-locked circuit.';
scopeNotes['Emergency Combination Light \u2014 LED FACE-II-B-4024 Above Ceiling at Exit'] = 'Emergency combination light LED FACE-II-B-4024 above ceiling at exit locations per Sheet E-3.';
scopeNotes['Dimmer Switches \u2014 All Multi-Gang w/ Occupancy Sensor, Power Pack & LED Dimmer'] = 'Dimmer bank with occupancy sensors, power packs, and LED dimmers at all multi-gang locations.';
scopeNotes['TC-1 Timeclock \u2014 Tork 365, 24-Hr Astronomical, Interior Zones'] = 'TC-1 Tork 365 interior timeclock, 24-hour astronomical for interior lighting zones.';
scopeNotes['TC-2 Timeclock \u2014 Tork 365, Exterior Signage w/ Breaker Locks'] = 'TC-2 Tork 365 exterior signage timeclock with breaker locks per Sheet E-2.';
scopeNotes['Drive-Thru Electrical Conduit \u2014 (3) 3/4" SCH 40 to Menu Board, Panel & Pre-Order'] = 'Drive-thru conduit: 3x 3/4" SCH 40 to menu board, panel, and pre-order board per Sheet E-3.';
scopeNotes['Devices & Receptacles \u2014 All White, GFCI Wet Areas, Tamper Proof Throughout'] = 'All devices and receptacles white, GFCI in wet areas, tamper-proof throughout per 2020 NEC.';
scopeNotes['Millwork Cabinet Wiring Harness Routing & Field Joint Connections'] = 'Cabinet wiring harness routing coordinated with Wasserstrom per Sheet A-5b. All field joint connections.';
scopeNotes['Smoke Detector & BDA \u2014 Furnish, Wire & Test per NFPA 72'] = 'Smoke detectors and BDA (bi-directional amplifier) furnished, wired, and tested per NFPA 72.';
scopeNotes['Full Electrical Labor \u2014 Service, Panels, Wiring, Lighting, Devices & Drive-Thru'] = 'All electrical labor for service entrance, panels, branch wiring, lighting, devices, and drive-thru conduit per 2020 Arkansas Electric Code.';
/* DIV 13 */
scopeNotes['GC Conduit Rough-In \u2014 All 1.5" Min LV Conduit, Pull Strings & J-Boxes'] = 'All conduits 1.5" minimum with pull strings and comm boxes by GC. SK vendor responsible for all cabling and terminations.';
scopeNotes['CAT-6 Plenum Cable \u2014 20 Runs from Patch Panel to All Locations'] = '20 CAT-6 plenum rated cables (ANSI/TIA/EIA 568B, white jacket, no splices, 6\' spare each end) from office patch panel to all locations.';
scopeNotes['24-Port Patch Panel \u2014 Office Desk Location'] = '24-port patch panel at office desk location per Sheet A-5b.';
scopeNotes['HME Drive-Thru Headset System \u2014 Module, Headsets, Vehicle Detection'] = 'HME drive-thru headset system: module, headsets, vehicle detection. Contact Chris Niyahisa 858-644-8803. Coordinate early shipment.';
scopeNotes['HME Drive-Thru Audio System \u2014 4.375"W x 4.375"H'] = 'HME drive-thru audio system 4.375"W x 4.375"H per Sheet A-5b.';
scopeNotes['C3MS Store Music System \u2014 Coordinate w/ Jodi Hnand 360-892-5480'] = 'C3MS store music system coordinated with Jodi Hnand 360-892-5480. Speakers shifted to avoid black ceiling grid.';
scopeNotes['Bad Door Entry Alarm \u2014 Detex EAX-500, Rear Exit Door'] = 'Detex EAX-500 bad door entry alarm on rear exit door per Sheet A-5b.';
scopeNotes['2x4 J-Box for Wireless Base \u2014 Back of House per Power Plan E-3'] = '2x4 J-box for wireless base, NEXEO base, timer, and optional Nitro leaderboard screen per detail 4/A-5b.';
scopeNotes['Telephone Riser \u2014 Stub Conduit, Wire Guard, 5 Conductor Min'] = 'Telephone riser with stub conduit, wire guard, minimum 5 conductors per detail 4/E-4b.';
scopeNotes['Drive-Thru Audio Conduit \u2014 3/4" AC Power + 1" Audio + 4x4 J-Box Outside Access'] = 'Drive-thru audio conduit: 3/4" AC power plus 1" audio plus 4x4 J-box outside access. All audio cabling separate from data/power.';
scopeNotes['NEXEO Base, Timer, Headset Rack & Optional Nitro Leaderboard Conduit Runs'] = 'NEXEO base, timer, headset rack, and optional Nitro leaderboard screen conduit runs per detail 4/A-5b.';
scopeNotes['Low Voltage Labor \u2014 GC Conduit, Boxes, Pull Strings & SK Vendor Coordination'] = 'All GC labor for low voltage conduit, boxes, pull strings, and SK vendor coordination per Sheets A-5b, A-5c, E-3.';
/* DIV 14 */
scopeNotes['Ready Access 275 Drive-Thru Window \u2014 Frame, Rough Opening & Install'] = 'Ready Access 275 drive-thru window per detail 1/A-9. GC frames rough opening per specs; determine installation type (wood or masonry framing) before ordering.';
scopeNotes['Exterior Menu Board \u2014 C3MS Signage Vendor, JMI 305-895-8485'] = 'Menu board (F1): wall-mounted exterior per Sheet A-9. C3MS signage vendor (JMI 305-895-8485) installs all drive-thru equipment.';
scopeNotes['Menu Inserts \u2014 Printed by Culinaire, Installed by GC'] = 'Menu inserts printed by Culinaire, installed by GC in menu board frame.';
scopeNotes['Pre-Order Board (F28) \u2014 Signage Vendor Install'] = 'Pre-order board (F28) required unless site does not allow. Signage vendor installs per Sheet A-9.';
scopeNotes['Height Clearance Bar (F16) \u2014 Signage Vendor Install'] = 'Height clearance bar (F16) required per drive-thru lane specifications. Signage vendor installs.';
scopeNotes['Drive-Thru Canopy/Awning \u2014 Extruded Aluminum Soffit, Full Perimeter Gutter'] = 'Canopy/awning: extruded aluminum soffit deck with full perimeter gutter per detail 7/A-9.';
scopeNotes['Double 2X Blocking at All Canopy Attachment Points w/ Thru-Wall Flashing'] = 'Double 2X blocking at all canopy attachment points with thru-wall flashing per detail 7/A-9.';
scopeNotes['Menu Board Anchor Cage \u2014 Set in Concrete per Detail 5/A-9'] = 'Menu board anchor cage set in concrete per detail 5/A-9.';
scopeNotes['6" DIA Steel Bollard w/ Concrete Fill \u2014 Detector Loop Location, Paint to Match'] = '6" diameter steel bollard with concrete fill at detector loop location, painted to match per detail 2/A-1a.';
scopeNotes['HME Magnetic Detector Loop \u2014 72" PVC Conduit Provided by HME, GC Installs'] = 'HME magnetic detector loop: 72" PVC conduit provided by HME, GC installs. 2" below grade centered with menu board.';
scopeNotes['Underground Conduit \u2014 1-1/4" for All DT Cable/Power, 3/4" SCH 40 to Panel & Base Station'] = '1-1/4" underground conduit for all drive-thru cable/power with 3/4" SCH 40 to panel and base station.';
scopeNotes['All-In-One OCB Speaker Post \u2014 Signage Vendor Provided & Installed'] = 'All-in-one OCB speaker post provided and installed by signage vendor per Sheet A-9.';
scopeNotes['Drive-Thru GC Labor \u2014 R.O. Framing, Blocking, Conduit, Anchor Cage, Bollard & Coordination'] = 'All GC labor for rough opening framing, blocking, conduit, anchor cage, bollard installation, and 5-phase coordination per Sheet A-9.';
/* DIV 15 */
scopeNotes['Hoshizaki IM-400MAJ Ice Machine \u2014 GC Plumbing & Electrical Connections'] = 'Hoshizaki IM-400MAJ ice machine (22"W x 32.75"H x 27.875"D). GC responsible for plumbing and electrical connections per Sheet A-5a.';
scopeNotes['Hoshizaki B-700PF Ice Storage Bin \u2014 GC Set in Place & Connect'] = 'Hoshizaki B-700PF ice storage bin (44"W x 33.875"D x 44"H). GC sets in place and connects.';
scopeNotes['Hoshizaki Certified Installer \u2014 Remote Condenser, Refrigerant Lines & Startup'] = 'Certified Hoshizaki installer for remote condenser, refrigerant lines, and startup. Remote condenser on roof coordinated with Landlord\'s roofer.';
scopeNotes['TurboChef SOTA Convection Oven \u2014 GC Electrical Connection, NEMA 6-30R'] = 'TurboChef SOTA convection oven with NEMA 6-30R electrical connection by GC per Sheet A-5a.';
scopeNotes['Master-Bilt DC-40 Dipping Freezer \u2014 GC Electrical Connection'] = 'Master-Bilt DC-40 dipping freezer (3.2A/115V). GC electrical connection per Sheet A-5a.';
scopeNotes['Turbo Air PST-72 Reach-In Refrigerator \u2014 GC Electrical Connection & Delivery Access'] = 'Turbo Air PST-72 reach-in refrigerator (5.7A/115V dedicated circuit). GC electrical connection and delivery access coordination.';
scopeNotes['Turbo Air TBF-7200-N Reach-In Freezer on Casters \u2014 GC Electrical (2 Units)'] = 'Turbo Air TBF-7200-N reach-in freezer on casters, 2 units. GC electrical connections per Sheet A-5a.';
scopeNotes['Online Order Pickup Refrigerator (E2/E3) \u2014 GC Electrical Connection'] = 'Online order pickup refrigerator (E2/E3) with GC electrical connection per Sheet E-3.';
scopeNotes['Water Table (FR29-79) \u2014 GC Plumbing & Electrical Connections'] = 'Water table FR29-79 with GC plumbing and electrical connections per Sheet A-5a.';
scopeNotes['Personal Computer (E8) \u2014 GC Duplex Outlet, Audio Cable & Data/Comm at Desk'] = 'Personal computer (E8) with GC duplex outlet, audio cable, and data/comm at desk per Sheet E-3.';
scopeNotes['Automatic Hand Dispenser (VTA-404) \u2014 GC Electrical Connection'] = 'Automatic hand dispenser VTA-404 with GC electrical connection per Sheet A-5a.';
scopeNotes['Equipment Delivery Access \u2014 Temporary Storefront Removal & Reinstall if Required'] = 'Equipment delivery may require temporary storefront removal and reinstall. Coordinate with FF&E vendor Wasserstrom.';
scopeNotes['SK Open Sign \u2014 Optional, Only Approved SK Open Sign per A-5a Note'] = 'Optional SK Open Sign \u2014 only approved open sign per A-5a note. No other open signs permitted.';
scopeNotes['Equipment GC Labor \u2014 Connections, Startup Coordination & Delivery Access'] = 'All GC labor for equipment plumbing/electrical connections, Hoshizaki startup coordination, and delivery access per Sheet A-5a.';
/* DIV 16 */
scopeNotes['GC Graphics Package \u2014 Restroom Signs, Must Wash Hands, Interior Posters, Bone Board Inserts'] = 'GC installs interior graphics (C3MS): bone board inserts 8.5"x17", restroom signage 12-3/4"x6", must wash hands 8-1/4"x2-1/2", interior posters 36"x24".';
scopeNotes['"Rule the Day" Vinyl Mural \u2014 216"x32" by Store D\u00e9cor'] = '"Rule the Day" vinyl mural 216"x32" by Store D\u00e9cor (John F. 972-463-4811). Coordinated with signage vendor C3MS.';
scopeNotes['Smoothie Bowl Wall Mural \u2014 64.5"Wx59.75"T by Store D\u00e9cor'] = 'Smoothie Bowl wall mural 64.5"W x 59.75"T by Store D\u00e9cor per Sheet A-8.';
scopeNotes['Vinyl Day Graphics Package \u2014 All Sizes per Graphic Schedule A-5b (Signage Vendor)'] = 'Vinyl day graphics package, all sizes per Graphic Schedule Sheet A-5b. Signage vendor (C3MS \u2014 JMI 305-895-8485) installs.';
scopeNotes['3 Interior Digital Menu Boards \u2014 Samsung/Dacor 43"x24" w/ Dedicated 20A Circuit Each'] = '3 interior digital menu boards (Samsung/Dacor 43"x24") above bar per Sheet A-7. Dedicated 20A circuit each.';
scopeNotes['Pre-Order Menu Board \u2014 Colormark, GC Conduit & Electrical Only'] = 'Pre-order menu board by Colormark. GC provides conduit and electrical only.';
scopeNotes['Illuminated Signage \u2014 20A Dedicated Circuit to A-Box per Graphic Schedule A-5b'] = 'Illuminated signage on 20A dedicated circuit to A-box per Graphic Schedule Sheet A-5b.';
scopeNotes['Everbrite Building Canopy Signage \u2014 GC Blocking & Conduit Coordination'] = 'Everbrite building canopy signage (David Jackman 402-435-9579). GC provides blocking and conduit.';
scopeNotes['Mobile Order/Pick Up Black Pendant \u2014 GC Blocking & Electrical'] = 'Mobile order/pick up black pendant. GC provides blocking and electrical connection.';
scopeNotes['Magnetic Marker Board 24"x36" \u2014 Supply, Block & Install'] = 'Magnetic marker board 24"x36" \u2014 supply, block, and install in service area.';
scopeNotes['Exterior Signage Circuits \u2014 Timeclock & Breaker Locks per A-1 Specs'] = 'All exterior signage on timeclock TC-2 with breaker locks per Sheet A-1 specs.';
scopeNotes['Digital Board Data Feed to Sticky Printer \u2014 CAT-6 Run & Connection'] = 'CAT-6 data feed run from digital menu boards to sticky printer location and connection.';
scopeNotes['Graphics & Signage GC Labor \u2014 Electrical, Blocking, Coordination & Protection'] = 'All GC labor for graphics/signage electrical, blocking, vendor coordination. All walls/ceilings/finishes must be complete and approved before graphics vendor arrives.';

/* -- 4. SOURCE LINK URL MAP — DEEP PRODUCT PAGES -------------------- */
var sourceLinks = {};
/* DIV 01 */
sourceLinks['General Conditions / Superintendent'] = 'https://www.smoothieking.com/franchise/franchise-development';
sourceLinks['Building Permit & All Inspection Fees'] = 'https://www.russellvillear.gov/199/Building-Permits';
sourceLinks['Performance & Payment Bond (100% of contract)'] = 'https://www.suretysite.com/performance-bonds';
sourceLinks['Insurance \u2014 GL, Auto, Workers Comp'] = 'https://www.suretysite.com/contractors-insurance';
sourceLinks['Temporary Facilities \u2014 Power, Toilets, Dumpster'] = 'https://www.unitedrentals.com/marketplace/temporary-power-distribution';
sourceLinks['Equipment Delivery Coordination & Forklift'] = 'https://www.unitedrentals.com/marketplace/forklifts';
sourceLinks['Final Clean & Attic Stock Delivery'] = 'https://www.smoothieking.com/franchise/franchise-development';
sourceLinks['Closeout Package \u2014 As-Builts, O&M Manuals, Warranties, Lien Waivers'] = 'https://www.smoothieking.com/franchise/franchise-development';
sourceLinks['GC Fee / Overhead & Profit'] = 'https://www.smoothieking.com/franchise/franchise-development';
/* DIV 02 */
sourceLinks['6" Steel Bollards \u2014 concrete filled, painted'] = 'https://www.mcmaster.com/steel-bollards';
sourceLinks['Concrete Paving Sealant & Expansion Joint Material'] = 'https://www.dowsil.com/en/products-solutions/product-lines/dowsil/construction-sealants.html';
sourceLinks['Underground Conduit \u2014 1-1/4" for Drive-Thru Cable/Power'] = 'https://www.atkore.com/products/electrical-raceway/conduit/pvc-conduit/';
sourceLinks['Detector Loop \u2014 72" PVC w/ Loop, 3/4" SCH 40 Conduit to Panel'] = 'https://www.hme.com/drive-thru/drive-thru-systems/';
sourceLinks['HC Parking Protection & Restoration (if damaged)'] = 'https://www.ada.gov/topics/parking/';
sourceLinks['Site Work Labor \u2014 Bollards, Conduit, Sealant, HC Protection'] = 'https://www.concretenetwork.com/concrete-prices/';
/* DIV 03 */
sourceLinks['Concrete \u2014 4" Slab on Grade, 4,000 PSI'] = 'https://www.concretenetwork.com/concrete-prices/';
sourceLinks['Rebar \u2014 #3 @ 14" OC Both Ways'] = 'https://www.nucor.com/products/rebar/';
sourceLinks['Epoxy Grout & Dowels \u2014 #3 x 1\'-6" @ 18" OC'] = 'https://www.hilti.com/c/CLS_FASTENER_7135/CLS_ADHESIVE_ANCHORS_7135';
sourceLinks['RTU Roof Opening Framing \u2014 L3x3x3/16 Steel Angles'] = 'https://www.mcmaster.com/steel-angles';
sourceLinks['Mechanical Curb Support \u2014 HSS Blocking & L2x2 Welded Assembly'] = 'https://www.mcmaster.com/structural-steel-tubing';
sourceLinks['Concentrated Load Framing \u2014 L2x2x3/16 Joist Reinforcing'] = 'https://www.mcmaster.com/steel-angles';
sourceLinks['Slab Demo & Trench Excavation for Under-Floor Plumbing'] = 'https://www.concretenetwork.com/concrete-cutting/';
sourceLinks['Roof Penetrations \u2014 Landlord Roofer Coordination & Cost'] = 'https://www.gaf.com/en-us/roofing-products/commercial-roofing-products';
sourceLinks['Structural Labor \u2014 Slab, Forming, Steel, Roof Framing'] = 'https://www.concretenetwork.com/concrete-prices/';
/* DIV 04 */
sourceLinks['Metal Stud Framing \u2014 3-5/8" 16" OC'] = 'https://www.clarkdietrich.com/products/interior-framing/studs-and-track';
sourceLinks['5/8" Type X Drywall \u2014 Standard Partitions'] = 'https://www.usg.com/content/usgcom/en/products/panels-boards/drywall/sheetrock-brand-panels.html';
sourceLinks['5/8" Glass Mat Tile Backer \u2014 Wet & Tile Areas'] = 'https://www.usg.com/content/usgcom/en/products/panels-boards/specialty/durock-cement-board.html';
sourceLinks['5/8" Type X Mold-Resistant Drywall \u2014 Wet Areas'] = 'https://www.usg.com/content/usgcom/en/products/panels-boards/drywall/sheetrock-brand-mold-tough-panels.html';
sourceLinks['0.09" Non-Rated Smooth FRP Panels'] = 'https://www.panolam.com/frp/';
sourceLinks['Insulation \u2014 Batt, Sound & Thermal at Rated Walls'] = 'https://www.owenscorning.com/en-us/insulation/products/fiberglass-batt-insulation';
sourceLinks['Joint Compound, Corner Bead & Control Joints'] = 'https://www.usg.com/content/usgcom/en/products/joint-compounds.html';
sourceLinks['Blocking \u2014 Treated Wood for Shelving & Millwork Walls'] = 'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZbqm7';
sourceLinks['Fire-Stop System \u2014 All Wall, Ceiling & Roof Penetrations'] = 'https://www.hilti.com/c/CLS_FIRESTOP_702';
sourceLinks['Restaurant-Compatible Clear Silicone Sealant \u2014 FRP & Millwork'] = 'https://www.dowsil.com/en/products-solutions/product-lines/dowsil/construction-sealants/silicone-sealants.html';
sourceLinks['Framing, Drywall, FRP & Finish Labor'] = 'https://www.clarkdietrich.com/products/interior-framing';
/* DIV 05 */
sourceLinks['Door 1 \u2014 3\'x7\' Tempered Glass / Aluminum Frame (Front Entry)'] = 'https://www.curries.com/products/aluminum-doors-and-frames/';
sourceLinks['Door 2 \u2014 3\'x7\' Solid Core / HM Frame Painted (Restroom/Office)'] = 'https://www.curries.com/products/hollow-metal-doors/';
sourceLinks['Door 3 \u2014 Existing Rear Exit Door Paint & Hardware Update'] = 'https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors';
sourceLinks['Drive-Thru Window \u2014 Ready Access 275'] = 'https://www.readyaccess.com/products/drive-thru-windows/ready-access-275/';
sourceLinks['Hardware Group 2 \u2014 Front Entry Closer, Mortised Cylinder, Lockset'] = 'https://www.allegion.com/us/en/products/door-closers-and-operators/commercial-door-closers.html';
sourceLinks['Hardware Group 3 \u2014 Restroom Privacy Closer, Hinges, Mutes, Floor Stop'] = 'https://www.allegion.com/us/en/products/locks-and-levers/commercial-cylindrical-locks.html';
sourceLinks['Hardware Group 4 \u2014 Rear Exit Panic Device, Closer, Kick Plate, Hinges'] = 'https://www.allegion.com/us/en/products/exit-devices/rim-exit-devices.html';
sourceLinks['Surface-Mounted Double Hook \u2014 Restroom Doors (2 EA)'] = 'https://www.allegion.com/us/en/products/architectural-hardware/door-accessories.html';
sourceLinks['Door Paint \u2014 All HM Doors & Frames, 2 Finish Coats'] = 'https://www.sherwin-williams.com/en-us/color/color-family/blue-paint-colors/SW6252-ice-cube';
sourceLinks['Door, Frame, Hardware & Drive-Thru Window Install Labor'] = 'https://www.allegion.com/us/en/products.html';
/* DIV 06 */
sourceLinks['CL-1 Frost ClimaPlus 24x24" Tile \u2014 Black Exposed Grid (Customer Area)'] = 'https://www.usg.com/content/usgcom/en/products/ceilings/acoustical-panels/frost-climaplus.html';
sourceLinks['CL-2 Natura ClimaPlus Healthzone 24x24" Tile \u2014 White 9/16" Grid (Service)'] = 'https://www.usg.com/content/usgcom/en/products/ceilings/acoustical-panels/natura-climaplus-healthzone.html';
sourceLinks['CL-4 Sheetrock Lay-In 24x24" Square Edge Tile \u2014 White 15/16" Grid (Office)'] = 'https://www.usg.com/content/usgcom/en/products/ceilings/acoustical-panels/sheetrock-brand-lay-in-ceiling-panels.html';
sourceLinks['Suspended Grid System \u2014 Black Exposed Tee (Customer Area)'] = 'https://www.armstrongceilings.com/commercial/en-us/ceiling-grid.html';
sourceLinks['Suspended Grid System \u2014 White 9/16" Exposed Tee (Service Area)'] = 'https://www.armstrongceilings.com/commercial/en-us/ceiling-grid/prelude-9-16-exposed-tee.html';
sourceLinks['Drywall Bulkhead & Soffits \u2014 Frame, Hang, Tape, Finish, Paint P-1a'] = 'https://www.usg.com/content/usgcom/en/products/panels-boards/drywall/sheetrock-brand-panels.html';
sourceLinks['WD-1 Prefinished Red Oak Soffit Panel \u2014 7/8" x 4.5" x 7\'-0" Satin Finish'] = 'https://www.timberlinewood.com/products/';
sourceLinks['1/2" Water-Resistant OSB & MDF Soffit Backing'] = 'https://www.homedepot.com/b/Lumber-Composites-Plywood-OSB/N-5yc1vZbqpb';
sourceLinks['FR-4 Water-Resistant Primer & Paint \u2014 Soffit Prep Coat'] = 'https://www.sherwin-williams.com/en-us/products/pro-industrial-waterborne-alkyd-urethane';
sourceLinks['Drywall Ceiling \u2014 Service Area, Restrooms & Back Area at 8\'-0" AFF'] = 'https://www.usg.com/content/usgcom/en/products/panels-boards/drywall/sheetrock-brand-panels.html';
sourceLinks['Ceiling, Grid, Tile, Soffit, Bulkhead & Wood Panel Install Labor'] = 'https://www.armstrongceilings.com/commercial/en-us/ceiling-grid.html';
/* DIV 07 */
sourceLinks['PC-1 Polished Concrete \u2014 AmeriPolish System (Service & Back Areas)'] = 'https://www.ameripolish.com/product-category/densifiers/';
sourceLinks['WT-1 Porcelain Wall Tile \u2014 Floor to Ceiling Restrooms'] = 'https://www.creativematerialscorp.com/porcelain-tile';
sourceLinks['WT-2 & WT-3 Wall Tile \u2014 Wet Walls & Grab Bar Areas'] = 'https://www.creativematerialscorp.com/porcelain-tile';
sourceLinks['VCT-2 Luxury Vinyl Tile \u2014 Designated Areas per Finish Plan'] = 'https://www.shawfloors.com/flooring/luxury-vinyl';
sourceLinks['B-2 Schluter Strip \u2014 Polished Aluminum Tile Transition'] = 'https://www.schluter.com/schluter-us/en_US/Profiles/Transition/DILEX-AHK/p/DILEX-AHK';
sourceLinks['B-3 Tile Cove Base \u2014 6"x4" Gray Smooth'] = 'https://www.daltile.com/tile/ceramic-tile/cove-base';
sourceLinks['B-5 Porcelain Cove Base \u2014 12"x4" Polished'] = 'https://www.daltile.com/tile/porcelain-tile';
sourceLinks['B-6 Stainless Steel Base \u2014 Millwork & Bar Counter Locations'] = 'https://www.eagle-grp.com/stainless-steel-products/';
sourceLinks['Thinset Mortar \u2014 Floor & Wall Tile'] = 'https://www.mapei.com/us/en/products-and-solutions/products/detail/kerabond-keralastic-system';
sourceLinks['Grout \u2014 All Tile Joints; Grout Sealer upon Completion'] = 'https://www.mapei.com/us/en/products-and-solutions/products/detail/keracolor-u';
sourceLinks['Schluter Dilex-ANK \u2014 Floor to Wall Cove Transition'] = 'https://www.schluter.com/schluter-us/en_US/Profiles/For-Floors/Cove-shaped/Dilex-ANK/p/DILEX_ANK';
sourceLinks['P-1a Sherwin Williams Ice Cube \u2014 All Walls, Soffits, Bulkheads (2 Coats)'] = 'https://www.sherwin-williams.com/en-us/color/color-family/blue-paint-colors/SW6252-ice-cube';
sourceLinks['P-2a Sherwin Williams Passive + P-8 Floor White \u2014 Accent Areas'] = 'https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/SW7064-passive';
sourceLinks['White Shiplap \u2014 Bar Front & Service Area Wall per Elevations A-7/A-8'] = 'https://www.woodgrain.com/products/moulding-boards/shiplap/';
sourceLinks['Silicone Caulk \u2014 Restaurant Compatible Clear at All Tile & Material Transitions'] = 'https://www.dowsil.com/en/products-solutions/product-lines/dowsil/construction-sealants/silicone-sealants.html';
sourceLinks['Flooring, Tile, Base, Paint & Shiplap Install Labor'] = 'https://www.mapei.com/us/en/products-and-solutions/tile-and-stone-installation.html';
/* DIV 08 */
sourceLinks['GC Power & Water Rough-In to All Millwork Locations'] = 'https://www.nibco.com/products/copper-fittings';
sourceLinks['GC Final Electrical Hook-Ups \u2014 All Millwork & Cabinet Wiring Harness Connections'] = 'https://www.southwire.com/building-wire';
sourceLinks['GC Final Plumbing Hook-Ups \u2014 All Sinks & Equipment in Millwork'] = 'https://www.nibco.com/products/copper-fittings';
sourceLinks['Counter Top Grommets \u2014 All Millwork Electrical Penetrations'] = 'https://www.mcmaster.com/desk-grommets';
sourceLinks['Treated Wood Blocking \u2014 All Shelving & Millwork Wall Locations'] = 'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZbqm7';
sourceLinks['Restaurant-Compatible Clear Silicone \u2014 All Millwork Joints, Countertops & Food Zones'] = 'https://www.dowsil.com/en/products-solutions/product-lines/dowsil/construction-sealants/silicone-sealants.html';
sourceLinks['Magnetic Marker Board 2\'x3\' \u2014 Supply & Install with Wall Blocking'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/mirrors/';
sourceLinks['"Rule the Day" Wall Mural \u2014 216"x32" Install Coordination'] = 'https://www.c3ms.com/services/';
sourceLinks['Smoothie Bowl Wall Mural \u2014 64.5"W x 59.75"T Install Coordination'] = 'https://www.c3ms.com/services/';
sourceLinks['GC Millwork Coordination, Hook-Ups, Blocking & Mural Install Labor'] = 'https://www.smoothieking.com/franchise/franchise-development';
/* DIV 09 */
sourceLinks['ADA Wall-Hung Lavatory \u2014 White w/ ADA Faucet (2 EA)'] = 'https://www.americanstandard-us.com/bathroom/sinks/wall-mount-bathroom-sinks';
sourceLinks['White Elongated Toilet \u2014 Solid Plastic Open Front Seat (2 EA)'] = 'https://www.americanstandard-us.com/bathroom/toilets/elongated-toilets';
sourceLinks['ADA Grab Bars \u2014 36" Rear + 42" Side (2 Sets)'] = 'https://www.bobrick.com/products/grab-bars/';
sourceLinks['Toilet Paper Dispenser \u2014 ADA Compliant (2 EA)'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/toilet-tissue-dispensers/';
sourceLinks['Wall Mirror \u2014 Each Restroom (2 EA)'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/mirrors/';
sourceLinks['Paper Towel Dispenser (2 EA)'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/paper-towel-dispensers/';
sourceLinks['Soap Dispenser (2 EA)'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/soap-dispensers/';
sourceLinks['Sanitary Napkin Disposal (2 EA)'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/sanitary-napkin-disposal/';
sourceLinks['ADA Pipe Insulation \u2014 All Exposed Lavatory Supply & Drain Lines'] = 'https://www.owenscorning.com/en-us/insulation/products/pipe-insulation';
sourceLinks['Restroom Signage \u2014 Raised Characters + Braille, ADA Compliant (2 EA)'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/signs/';
sourceLinks['Fire Extinguishers \u2014 Quantity & Type per Fire Marshal'] = 'https://www.ansul.com/en/us/pages/ProductDetail.aspx?productdetail=SENTRY+Stored+Pressure+Fire+Extinguishers';
sourceLinks['Knox Box with Key \u2014 Location per Fire Marshal'] = 'https://www.knoxbox.com/products/knox-box/';
sourceLinks['Occupant Load Sign \u2014 Max 27 Persons, Conspicuous Location'] = 'https://www.mysafetysign.com/maximum-occupancy-signs';
sourceLinks['Suite Address Numbers \u2014 4" Min Height, 1/2" Stroke, Exterior'] = 'https://www.houseletters.com/commercial-letters';
sourceLinks['Restroom Accessories, Signage, Fire Extinguisher & Knox Box Install Labor'] = 'https://www.bobrick.com/products/grab-bars/';
/* DIV 10 */
sourceLinks['Under-Floor Plumbing \u2014 Rough-In, Trenching & Backfill'] = 'https://www.nibco.com/products/cast-iron-fittings';
sourceLinks['Above-Floor Plumbing \u2014 All Supply, Waste & Vent Piping'] = 'https://www.nibco.com/products/copper-fittings';
sourceLinks['Hoshizaki GW-1 Tankless Condensing Water Heater'] = 'https://www.hoshizakiamerica.com/product/gw-1/';
sourceLinks['Grundfos Alpha HW 15-55F Circulating Pump'] = 'https://www.grundfos.com/products/find-product/alpha-hw';
sourceLinks['Western Purifier SK-HWF507 Water Filtration System'] = 'https://www.westernpurifier.com/products/smoothie-king/';
sourceLinks['Grease Trap \u2014 113 lbs Capacity, Connect to Existing Line'] = 'https://www.watts.com/our-story/brands/watts/grease-interceptors';
sourceLinks['Floor Drains, Floor Sinks & Hub Drains \u2014 All Locations per P-2a'] = 'https://www.watts.com/our-story/brands/watts/floor-drains';
sourceLinks['Trap Primers \u2014 3/4" Screw Line to Each Floor Drain/Sink/Hub'] = 'https://www.watts.com/our-story/brands/watts/trap-primers-trap-seal-primers';
sourceLinks['Thermostatic Mixing Valves \u2014 Watts LF-MM Series at All Lavatories & Hand Sinks'] = 'https://www.watts.com/products/plumbing-flow-control-solutions/thermostatic-mixing-valves/point-of-use/lf-mmvm';
sourceLinks['Backflow Preventers \u2014 Main Supply & Mop Sink'] = 'https://www.watts.com/our-story/brands/watts/backflow-preventers';
sourceLinks['New Gas Meter & Gas Piping \u2014 ~335 MBH Total Load'] = 'https://www.tracpipe.com/products/counterstrike/';
sourceLinks['Cold Water Connection \u2014 Existing Line, ~28 WSFUs Total Load'] = 'https://www.nibco.com/products/press-system';
sourceLinks['Ice Machine Plumbing \u2014 1/2" Filtered Water, Condensate to Indirect Drain'] = 'https://www.hoshizakiamerica.com/products/ice-machines/';
sourceLinks['Mop Sink \u2014 24"x24" Floor Level w/ Backflow Prevention'] = 'https://www.americanstandard-us.com/commercial/commercial-sinks/floor-mounted-service-sinks';
sourceLinks['Plumbing Fixture Schedule \u2014 All Sinks, Faucets & Accessories per A-3'] = 'https://www.americanstandard-us.com/commercial';
sourceLinks['Pipe Insulation \u2014 All Hot & Cold Exposed & Accessible Piping'] = 'https://www.owenscorning.com/en-us/insulation/products/pipe-insulation';
sourceLinks['Full Plumbing Labor \u2014 Under-Floor, Above-Floor, Fixtures & Equipment'] = 'https://www.nibco.com/products/copper-fittings';
/* DIV 11 */
sourceLinks['Trane RTU-01 YSX090 \u2014 7.5 Ton, 480V/3-Phase, R-410A'] = 'https://www.trane.com/commercial/north-america/us/en/products-systems/equipment/rooftop-units/precedent-3-10-tons.html';
sourceLinks['RTU Curb & Roof Mounting \u2014 Coordinate w/ Landlord Roofer'] = 'https://www.trane.com/commercial/north-america/us/en/products-systems/equipment/rooftop-units/precedent-3-10-tons.html';
sourceLinks['Supply & Return Ductwork \u2014 Galvanized Steel, All Sizes per M-2'] = 'https://www.speeddist.com/ductwork/';
sourceLinks['Duct Insulation \u2014 R-8 Exposed / R-0.85 Min Concealed'] = 'https://www.owenscorning.com/en-us/insulation/products/duct-insulation';
sourceLinks['Diffuser & Grille Schedule \u2014 All Marks A thru N per M-4a'] = 'https://www.speeddist.com/grilles-registers-diffusers/';
sourceLinks['Manual Balancing Dampers \u2014 All Supply & Return Branches'] = 'https://www.speeddist.com/dampers/';
sourceLinks['Thermostats \u2014 1-Stage Heat/Cool w/ Manual Changeover & Clear Locked Cover'] = 'https://www.honeywell.com/us/en/products/connected-buildings/thermostats';
sourceLinks['EF-1 Restroom Exhaust Fan \u2014 75 CFM, Vent to Exterior, Switch to Light'] = 'https://www.greenheck.com/products/air-movement/centrifugal-inline-fans/ceiling-exhaust-fans/sp';
sourceLinks['EF-2 Back Area Cabinet Exhaust Fan \u2014 150 CFM'] = 'https://www.greenheck.com/products/air-movement/centrifugal-inline-fans/cabinet-inline-fans/sq';
sourceLinks['Condensate Drain Line \u2014 1" Down in Wall to Mop Sink Indirect'] = 'https://www.nibco.com/products/pvc-fittings';
sourceLinks['TAB \u2014 Test, Adjust & Balance Report by Certified Agency'] = 'https://www.tabb.org/certified-agencies';
sourceLinks['Fall Arrest / Restraint Anchorage Connectors \u2014 RTU Roof Access'] = 'https://www.3m.com/3M/en_US/p/c/ppe/fall-protection/roofing-fall-protection/';
sourceLinks['Full Mechanical Labor \u2014 RTU, Ductwork, Exhaust, Controls & TAB'] = 'https://www.trane.com/commercial/north-america/us/en/products-systems/equipment/rooftop-units/precedent-3-10-tons.html';
/* DIV 12 */
sourceLinks['Service Entrance \u2014 Extend Conduit from Landlord MSB to New Tenant Meter'] = 'https://www.schneider-electric.com/en/product-category/switchboards/';
sourceLinks['H1A Main Distribution Panel \u2014 480/277V 3-Phase 4-Wire'] = 'https://www.schneider-electric.com/en/product-range/1702-square-d-nq-panelboards/';
sourceLinks['T-LA Transformer \u2014 112.5 KVA, 480/277V to 120/208V 3-Phase'] = 'https://www.schneider-electric.com/en/product-category/transformers-low-voltage-dry/';
sourceLinks['Panel P \u2014 225A MLO, 22 KAIC, 120/208V 3-Phase, Surface Mount'] = 'https://www.schneider-electric.com/en/product-range/1702-square-d-nq-panelboards/';
sourceLinks['Branch Circuit Wiring \u2014 All Circuits per Panel P Schedule E-4b'] = 'https://www.southwire.com/building-wire/simpull-thhn-building-wire/';
sourceLinks['LED Recessed Down Lights \u2014 NORA NAROS2-WILES (Customer Area)'] = 'https://www.noralighting.com/products/recessed/naros2/';
sourceLinks['3\'x8\' LED Panel \u2014 GFP-9399050 Standard White (Back Area)'] = 'https://www.noralighting.com/products/surface-mount/';
sourceLinks['4\' LED Can Lights \u2014 Contractor Source, Overhead Soffit & Community Table'] = 'https://www.noralighting.com/products/recessed/';
sourceLinks['Tech Lighting Window Pendant \u2014 Black Finish, Over Canopy Bar Area'] = 'https://www.techlighting.com/Products/Pendants';
sourceLinks['Emergency Exit Signs \u2014 LED Type Y, Battery Backup, Breaker Lock Circuit'] = 'https://www.lithonia.com/products/exit-and-emergency-lighting/exit-signs/';
sourceLinks['Emergency Combination Light \u2014 LED FACE-II-B-4024 Above Ceiling at Exit'] = 'https://www.lithonia.com/products/exit-and-emergency-lighting/emergency-units/';
sourceLinks['Dimmer Switches \u2014 All Multi-Gang w/ Occupancy Sensor, Power Pack & LED Dimmer'] = 'https://www.lutron.com/en-US/Products/Pages/SingleRoomControls/Dimmers-Commercial/overview.aspx';
sourceLinks['TC-1 Timeclock \u2014 Tork 365, 24-Hr Astronomical, Interior Zones'] = 'https://www.nsiindustries.com/product-category/timers/astronomic-timers/';
sourceLinks['TC-2 Timeclock \u2014 Tork 365, Exterior Signage w/ Breaker Locks'] = 'https://www.nsiindustries.com/product-category/timers/astronomic-timers/';
sourceLinks['Drive-Thru Electrical Conduit \u2014 (3) 3/4" SCH 40 to Menu Board, Panel & Pre-Order'] = 'https://www.atkore.com/products/electrical-raceway/conduit/rigid-metal-conduit/';
sourceLinks['Devices & Receptacles \u2014 All White, GFCI Wet Areas, Tamper Proof Throughout'] = 'https://www.leviton.com/products/electrical-wiring-devices/receptacles/gfci-receptacles';
sourceLinks['Millwork Cabinet Wiring Harness Routing & Field Joint Connections'] = 'https://www.southwire.com/building-wire/simpull-thhn-building-wire/';
sourceLinks['Smoke Detector & BDA \u2014 Furnish, Wire & Test per NFPA 72'] = 'https://www.systemsensor.com/products/smoke-detectors/';
sourceLinks['Full Electrical Labor \u2014 Service, Panels, Wiring, Lighting, Devices & Drive-Thru'] = 'https://www.schneider-electric.com/en/product-range/1702-square-d-nq-panelboards/';
/* DIV 13 */
sourceLinks['GC Conduit Rough-In \u2014 All 1.5" Min LV Conduit, Pull Strings & J-Boxes'] = 'https://www.atkore.com/products/electrical-raceway/conduit/emt-conduit/';
sourceLinks['CAT-6 Plenum Cable \u2014 20 Runs from Patch Panel to All Locations'] = 'https://www.monoprice.com/category/cables/bulk-network-cables/cat6-bulk-cable';
sourceLinks['24-Port Patch Panel \u2014 Office Desk Location'] = 'https://www.panduit.com/en/products/copper-systems/patch-panels-modular-jacks.html';
sourceLinks['HME Drive-Thru Headset System \u2014 Module, Headsets, Vehicle Detection'] = 'https://www.hme.com/drive-thru/drive-thru-headsets/nexeo-hdx/';
sourceLinks['HME Drive-Thru Audio System \u2014 4.375"W x 4.375"H'] = 'https://www.hme.com/drive-thru/drive-thru-systems/';
sourceLinks['C3MS Store Music System \u2014 Coordinate w/ Jodi Hnand 360-892-5480'] = 'https://www.c3ms.com/services/';
sourceLinks['Bad Door Entry Alarm \u2014 Detex EAX-500, Rear Exit Door'] = 'https://www.detex.com/products/alarms/eax-500/';
sourceLinks['2x4 J-Box for Wireless Base \u2014 Back of House per Power Plan E-3'] = 'https://www.atkore.com/products/electrical-raceway/fittings/boxes/';
sourceLinks['Telephone Riser \u2014 Stub Conduit, Wire Guard, 5 Conductor Min'] = 'https://www.panduit.com/en/products/copper-systems.html';
sourceLinks['Drive-Thru Audio Conduit \u2014 3/4" AC Power + 1" Audio + 4x4 J-Box Outside Access'] = 'https://www.atkore.com/products/electrical-raceway/conduit/rigid-metal-conduit/';
sourceLinks['NEXEO Base, Timer, Headset Rack & Optional Nitro Leaderboard Conduit Runs'] = 'https://www.hme.com/drive-thru/drive-thru-headsets/nexeo-hdx/';
sourceLinks['Low Voltage Labor \u2014 GC Conduit, Boxes, Pull Strings & SK Vendor Coordination'] = 'https://www.panduit.com/en/products/copper-systems/patch-panels-modular-jacks.html';
/* DIV 14 */
sourceLinks['Ready Access 275 Drive-Thru Window \u2014 Frame, Rough Opening & Install'] = 'https://www.readyaccess.com/products/drive-thru-windows/ready-access-275/';
sourceLinks['Exterior Menu Board \u2014 C3MS Signage Vendor, JMI 305-895-8485'] = 'https://www.c3ms.com/products/menu-boards/';
sourceLinks['Menu Inserts \u2014 Printed by Culinaire, Installed by GC'] = 'https://www.c3ms.com/products/menu-boards/';
sourceLinks['Pre-Order Board (F28) \u2014 Signage Vendor Install'] = 'https://www.c3ms.com/products/digital-menu-boards/';
sourceLinks['Height Clearance Bar (F16) \u2014 Signage Vendor Install'] = 'https://www.c3ms.com/products/drive-thru-equipment/';
sourceLinks['Drive-Thru Canopy/Awning \u2014 Extruded Aluminum Soffit, Full Perimeter Gutter'] = 'https://www.c3ms.com/products/canopies-awnings/';
sourceLinks['Double 2X Blocking at All Canopy Attachment Points w/ Thru-Wall Flashing'] = 'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZbqm7';
sourceLinks['Menu Board Anchor Cage \u2014 Set in Concrete per Detail 5/A-9'] = 'https://www.c3ms.com/products/menu-boards/';
sourceLinks['6" DIA Steel Bollard w/ Concrete Fill \u2014 Detector Loop Location, Paint to Match'] = 'https://www.mcmaster.com/steel-bollards';
sourceLinks['HME Magnetic Detector Loop \u2014 72" PVC Conduit Provided by HME, GC Installs'] = 'https://www.hme.com/drive-thru/drive-thru-systems/';
sourceLinks['Underground Conduit \u2014 1-1/4" for All DT Cable/Power, 3/4" SCH 40 to Panel & Base Station'] = 'https://www.atkore.com/products/electrical-raceway/conduit/pvc-conduit/';
sourceLinks['All-In-One OCB Speaker Post \u2014 Signage Vendor Provided & Installed'] = 'https://www.c3ms.com/products/drive-thru-equipment/';
sourceLinks['Drive-Thru GC Labor \u2014 R.O. Framing, Blocking, Conduit, Anchor Cage, Bollard & Coordination'] = 'https://www.c3ms.com/products/drive-thru-equipment/';
/* DIV 15 */
sourceLinks['Hoshizaki IM-400MAJ Ice Machine \u2014 GC Plumbing & Electrical Connections'] = 'https://www.hoshizakiamerica.com/products/ice-machines/cubers/im-500saa/';
sourceLinks['Hoshizaki B-700PF Ice Storage Bin \u2014 GC Set in Place & Connect'] = 'https://www.hoshizakiamerica.com/products/ice-machines/storage-bins/';
sourceLinks['Hoshizaki Certified Installer \u2014 Remote Condenser, Refrigerant Lines & Startup'] = 'https://www.hoshizakiamerica.com/support/service-network/';
sourceLinks['TurboChef SOTA Convection Oven \u2014 GC Electrical Connection, NEMA 6-30R'] = 'https://www.turbochef.com/products/sota/';
sourceLinks['Master-Bilt DC-40 Dipping Freezer \u2014 GC Electrical Connection'] = 'https://www.master-bilt.com/products/display-cases/dipping-cabinets/dc/';
sourceLinks['Turbo Air PST-72 Reach-In Refrigerator \u2014 GC Electrical Connection & Delivery Access'] = 'https://www.turboairinc.com/product/pst-72/';
sourceLinks['Turbo Air TBF-7200-N Reach-In Freezer on Casters \u2014 GC Electrical (2 Units)'] = 'https://www.turboairinc.com/product-category/reach-in-freezers/';
sourceLinks['Online Order Pickup Refrigerator (E2/E3) \u2014 GC Electrical Connection'] = 'https://www.turboairinc.com/product-category/reach-in-refrigerators/';
sourceLinks['Water Table (FR29-79) \u2014 GC Plumbing & Electrical Connections'] = 'https://www.eagle-grp.com/stainless-steel-products/work-tables/';
sourceLinks['Personal Computer (E8) \u2014 GC Duplex Outlet, Audio Cable & Data/Comm at Desk'] = 'https://www.dell.com/en-us/shop/desktop-computers/sc/desktops';
sourceLinks['Automatic Hand Dispenser (VTA-404) \u2014 GC Electrical Connection'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/hand-dryers/';
sourceLinks['Equipment Delivery Access \u2014 Temporary Storefront Removal & Reinstall if Required'] = 'https://www.smoothieking.com/franchise/franchise-development';
sourceLinks['SK Open Sign \u2014 Optional, Only Approved SK Open Sign per A-5a Note'] = 'https://www.smoothieking.com/franchise/franchise-development';
sourceLinks['Equipment GC Labor \u2014 Connections, Startup Coordination & Delivery Access'] = 'https://www.hoshizakiamerica.com/support/service-network/';
/* DIV 16 */
sourceLinks['GC Graphics Package \u2014 Restroom Signs, Must Wash Hands, Interior Posters, Bone Board Inserts'] = 'https://www.c3ms.com/products/interior-signage/';
sourceLinks['"Rule the Day" Vinyl Mural \u2014 216"x32" by Store D\u00e9cor'] = 'https://www.c3ms.com/products/wall-graphics/';
sourceLinks['Smoothie Bowl Wall Mural \u2014 64.5"Wx59.75"T by Store D\u00e9cor'] = 'https://www.c3ms.com/products/wall-graphics/';
sourceLinks['Vinyl Day Graphics Package \u2014 All Sizes per Graphic Schedule A-5b (Signage Vendor)'] = 'https://www.c3ms.com/products/wall-graphics/';
sourceLinks['3 Interior Digital Menu Boards \u2014 Samsung/Dacor 43"x24" w/ Dedicated 20A Circuit Each'] = 'https://www.samsung.com/us/business/displays/digital-signage/';
sourceLinks['Pre-Order Menu Board \u2014 Colormark, GC Conduit & Electrical Only'] = 'https://www.colormark.com/products/menu-boards/';
sourceLinks['Illuminated Signage \u2014 20A Dedicated Circuit to A-Box per Graphic Schedule A-5b'] = 'https://www.c3ms.com/products/illuminated-signage/';
sourceLinks['Everbrite Building Canopy Signage \u2014 GC Blocking & Conduit Coordination'] = 'https://www.everbrite.com/channel-letters/';
sourceLinks['Mobile Order/Pick Up Black Pendant \u2014 GC Blocking & Electrical'] = 'https://www.techlighting.com/Products/Pendants';
sourceLinks['Magnetic Marker Board 24"x36" \u2014 Supply, Block & Install'] = 'https://www.bobrick.com/products/commercial-washroom-accessories/mirrors/';
sourceLinks['Exterior Signage Circuits \u2014 Timeclock & Breaker Locks per A-1 Specs'] = 'https://www.nsiindustries.com/product-category/timers/astronomic-timers/';
sourceLinks['Digital Board Data Feed to Sticky Printer \u2014 CAT-6 Run & Connection'] = 'https://www.monoprice.com/category/cables/bulk-network-cables/cat6-bulk-cable';
sourceLinks['Graphics & Signage GC Labor \u2014 Electrical, Blocking, Coordination & Protection'] = 'https://www.c3ms.com/services/';

/* -- 5. RUN TRANSFORMATIONS --------------------------------------- */
function runTransformations() {
  var divIds = ['s01','s02','s03','s04','s05','s06','s07','s08','s09','s10','s11','s12','s13','s14','s15','s16'];
  var i, sec, cardScope, cardPricing, summaryDiv, headerDiv, pEl, secId;

  /* === TRANSFORMATION 1: Division Scope Summaries === */
  for (i = 0; i < divIds.length; i++) {
    secId = divIds[i];
    sec = document.getElementById(secId);
    if (!sec) continue;

    cardScope = sec.querySelector('.card-scope');
    cardPricing = sec.querySelector('.card-pricing');
    if (!cardPricing) continue;
    if (!divSummaries[secId]) continue;

    /* Check if summary already inserted */
    if (sec.querySelector('.div-scope-summary')) continue;

    summaryDiv = document.createElement('div');
    summaryDiv.className = 'div-scope-summary';

    headerDiv = document.createElement('div');
    headerDiv.className = 'dss-header';
    headerDiv.textContent = 'DIVISION SCOPE';
    summaryDiv.appendChild(headerDiv);

    pEl = document.createElement('p');
    pEl.textContent = divSummaries[secId];
    summaryDiv.appendChild(pEl);

    cardPricing.parentNode.insertBefore(summaryDiv, cardPricing);

    /* Hide original scope card */
    if (cardScope) {
      cardScope.style.display = 'none';
    }
  }

  /* === TRANSFORMATION 2: Expandable Line Item Scope === */
  var allRows = document.querySelectorAll('.pricing-row.fixed');
  for (i = 0; i < allRows.length; i++) {
    var row = allRows[i];
    var rowLabel = row.getAttribute('data-row-label') || '';
    var note = scopeNotes[rowLabel];

    /* Skip if already processed */
    if (row.getAttribute('data-scope-bound')) continue;
    row.setAttribute('data-scope-bound', '1');

    /* Create the expandable panel */
    var expandDiv = document.createElement('div');
    expandDiv.className = 'scope-expand';
    var expandInner = document.createElement('div');
    expandInner.className = 'scope-expand-inner';
    expandInner.textContent = note || 'Scope detail per construction documents.';
    expandDiv.appendChild(expandInner);

    /* Insert after the row */
    if (row.nextSibling) {
      row.parentNode.insertBefore(expandDiv, row.nextSibling);
    } else {
      row.parentNode.appendChild(expandDiv);
    }

    /* Add chevron to label */
    var labelEl = row.querySelector('.pricing-row-label');
    if (labelEl) {
      var chevron = document.createElement('span');
      chevron.className = 'scope-chevron';
      chevron.textContent = '\u203A';
      labelEl.insertBefore(chevron, labelEl.firstChild);
    }

    /* Click handler */
    (function(r, exp, chev) {
      r.addEventListener('click', function(e) {
        /* Don't toggle if clicking on an input, select, link, or button */
        var tag = e.target.tagName.toLowerCase();
        if (tag === 'input' || tag === 'select' || tag === 'a' || tag === 'button') return;
        if (e.target.closest('a') || e.target.closest('button')) return;

        var isOpen = exp.classList.contains('open');
        if (isOpen) {
          exp.classList.remove('open');
          if (chev) chev.classList.remove('open');
        } else {
          exp.classList.add('open');
          if (chev) chev.classList.add('open');
        }
      });
    })(row, expandDiv, labelEl ? labelEl.querySelector('.scope-chevron') : null);
  }

  /* === TRANSFORMATION 3: Source Links on Every Row === */
  var allRows2 = document.querySelectorAll('.pricing-row.fixed');
  for (i = 0; i < allRows2.length; i++) {
    var row2 = allRows2[i];
    var rowLabel2 = row2.getAttribute('data-row-label') || '';
    var labelEl2 = row2.querySelector('.pricing-row-label');
    if (!labelEl2) continue;

    /* Skip if already has a link of any kind */
    if (labelEl2.querySelector('.mat-link') || labelEl2.querySelector('.src-link') || labelEl2.querySelector('.src-link-new')) continue;

    var url = sourceLinks[rowLabel2];
    if (!url) continue;

    /* Ensure label is flex for proper layout */
    labelEl2.style.display = 'flex';
    labelEl2.style.alignItems = 'center';
    labelEl2.style.gap = '8px';

    var link = document.createElement('a');
    link.className = 'src-link-new';
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = '\u2197 Source';
    labelEl2.appendChild(link);
  }
}

setTimeout(runTransformations, 2500);

})();
