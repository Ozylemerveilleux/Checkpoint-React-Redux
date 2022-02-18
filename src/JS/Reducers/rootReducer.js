import { ADD_ARTICLE, DELETE_ARTICLE, DONE_ARTICLE, EDIT_ARTICLE } from "../Constants/actions-types";

const initialState = {
    posts: [
        {
            id: 1,
            title: "my first post",
            content: "my first content",
        }
    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state
        
            case DELETE_ARTICLE:
      return {
        ...state,
        TaskList: state.TaskList.filter((el) => el.id !== action.payload),
      };

      case DONE_ARTICLE:
        return {
          ...state,
          TaskList: state.TaskList.map((el) =>
            el.id === action.payload ? {...el, isDone: !el.isDone} : el
          ),
        };

        case EDIT_ARTICLE:
      return {
        ...state,
        TaskList: state.TaskList.map((el) =>
          el.id === action.payload.id
            ? {...el, description: action.payload.description}
            : el),
      }
    
    }
}

export default rootReducer;