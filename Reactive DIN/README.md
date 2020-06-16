# Reactive DIN
Goal: Create an interactive interface in React/TypeScript to calculate DIN value


## Tutorial Animation Breakdown
After the input has been filled in, on `Calculate` clicked:
- Step 1a:
	- Display: highlight the cell that matches height and weight
	- Caption: "Choose the boxes that matches height and weight"
- Step 1b:
	- Display: change/hightlight the higher (smaller value) row + Skier Code (SC)
	- Caption: "Select the Skier code on the row that matches the lower value (higher up on the chart)"
- Step 2:
	- Display: change/hightlight SC
	- Caption: "Adjust SC based on age and skill level" + "Age < 10 and >= 50 results 1 lower SC (move upward)" + "if SC is already A (topmost), no need to move"
- Step 3:
	- Display: hightlight the column that matches shoe size
	- Caption: "Find the column that matches shoe size"
- Step 4:
	- Display: Add/highlight SC row, hightlight the intersecting DIN cell
	- Caption: "The intersection will be the appropriate DIN value for the given skier"
- Step 4b: (if intersecting nothing)
	- Display: "Highlight the closest DIN cell on the row"
	- Caption: "If no value landed on the intersection, choose the closest DIN value on the same row"

### Todo:
- Handle off bounds:
	- skier code adjustment
	- shoesize on empty column
- Add disclaimer, table reference
- Add license?


### DIN Charts References:
- Salomon 16/17 Maunal [Page 51](http://salomontechnician.com/uploads/Salomon_technical_manual_alpine_16_17.pdf)
- Elan 18/19 Manual [Page 39](http://www.elansports.ca/en/Catalog/Elan%20technical%20Manual%202018%2019%20English.pdf)
** The implementation of this app is based on the Elan DIN Chart
