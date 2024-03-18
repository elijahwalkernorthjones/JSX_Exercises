function App() {
    return (
        <div>
            <Person 
                name= "Obie"
                age= {38}
                hobbies={["Using the force", "Reprimanding Anakin"]}
            />,
            <Person 
                name= "Shelifinneous"
                age= {6}
                hobbies={["picking nose", "throwing poop", "throwing ninja stars"]}
            />,
            <Person 
                name= "Elijah"
                age= {30}
                hobbies={["making hood-rat music", "learning to code", "being an overall hoodrat"]}
            />
        </div>
    )
}