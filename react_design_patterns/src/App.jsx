import { SplitScreen } from "./components/SplitScreen";
import { Leftside } from "./components/Leftside";
import { Rightside } from "./components/Rightside";

import styled from "styled-components";

import { products, people } from "./data/array";
import { RegularList } from "./Lists/RegularList";
import { NumberedList } from "./Lists/NumberedList";
import { personSmallListItem } from "./Lists/people/personSmallListItem";
import { personLargeListItem } from "./Lists/people/personLargeListItem";
import { productLargeListItem } from "./Lists/products/productLargeListItem";
import { productSmallListItem } from "./Lists/products/productSmallListItem";
import { Modal } from "./Modals/Modal";

function App() {
  return (
    <>
      {/* Section 1 Split Screen */}
      <SplitScreenWrap>
        <SplitScreen
          // left={Leftside}
          // right={Rightside}
          leftWidth={1}
          rightWidth={2}
          leftColor={"gold"}
          rightColor={"orangered"}
        >
          <Leftside firstname={"rado"} />
          <Rightside lastname={"botik"} />
        </SplitScreen>
      </SplitScreenWrap>
      {/* Section 2 List Items */}
      <ListsAndListItems>
        {/* <RegularList
          items={people}
          resource={"person"}
          itemComponent={personSmallListItem}
        />
        <RegularList
          items={people}
          resource={"person"}
          itemComponent={personLargeListItem}
        />
        <RegularList
          items={products}
          resource={"product"}
          itemComponent={productSmallListItem}
        /> */}
        {/* <NumberedList
          items={products}
          resource={"product"}
          itemComponent={productLargeListItem}
        /> */}
      </ListsAndListItems>
      {/* Section 3 Modals */}
      <Modals>
        <Modal>
          <RegularList
            items={products}
            resource={"product"}
            itemComponent={productSmallListItem}
          />
        </Modal>
      </Modals>
    </>
  );
}

const SplitScreenWrap = styled.section`
  display: none;
`;
const ListsAndListItems = styled.section`
  display: none;
`;
const Modals = styled.section``;

export default App;
