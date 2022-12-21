import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/contacts/contacts-selectors";
import { setFilter } from "../../redux/contacts/filter-slice";
import { FieldFilter, InputFilter } from "./Filter.styled";
import { Box } from "components/Box/Box";
import { theme } from "theme";

export const Filter = ({ onChange }) => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
        <Box minWidth={theme.sizes.minWidth} mb={4} textAlign="left">
            <FieldFilter htmlFor="">Find contacts by name
                <InputFilter
                    type="text"
                    value={filter}
                    placeholder="Ivan Petrov"
                    onChange={changeFilter}
                />
            </FieldFilter>
        </Box>
    );
};   