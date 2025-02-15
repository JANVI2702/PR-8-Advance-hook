import { useCallback } from "react";
import { useTheme } from "../Context/ThemeContext";

function ThemeToggle() {

    const { state: { isDark }, dispatch } = useTheme()

    const handleThemeToggle = useCallback(() => {
        dispatch({ type: "Toggle_Theme" }) 
        document.body.style.backgroundColor = isDark ? "#ffffff" : "#333333";
        document.body.style.color = isDark ? "#000000" : "#ffffff";
    }, [dispatch, isDark])

    return (
        <div>
            <button onClick={handleThemeToggle} className="btn btn-outline-secondary">
                {isDark ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </button>
            <p className="mt-2">{isDark ? "Light Mode" : "Dark Mode"}</p>
        </div>
    )
}

export default ThemeToggle