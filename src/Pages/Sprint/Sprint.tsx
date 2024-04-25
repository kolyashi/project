import React, { useState } from "react";
import Button from "../../shared/Button";
import Modal from "react-modal"
import Input from "../../shared/Input";
import './Sprint.css'
import TextArea from "../../shared/TextArea";
import Select from "../../shared/Select";
import { Link } from "react-router-dom";
import { SprintData } from "../../TypesAndInterfaces/TypesAndInterfaces";




// создания спринта,с датой,именем,в каком состоянии находится спринт(в процессе,не в процессе и тд)
const Sprint = () => { 
   
    const [sprintDataList, setSprintDataList] = useState<SprintData[]>([]);
    const [sprintName, setSprintName] = useState('');
    const [goal, setGoal] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showData, setShowData] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);


    const customStyles = {
        content: {
          background: "orange",
        }
      };

    const StartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newStartDate = e.target.value; // Получаем новое значение начальной даты из события
        setStartDate(newStartDate);
    }


    const DurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newDuration = e.target.value;
        setDuration(newDuration); // Устанавливаем новое значение продолжительности в состояние
    
        if (startDate && newDuration) {
            const durationDays = parseInt(newDuration); // Преобразуем продолжительность в число
            const newEndDate = new Date(startDate); // Создаем новый объект даты с выбранной начальной датой
            newEndDate.setDate(newEndDate.getDate() + durationDays); // Добавляем к начальной дате выбранную продолжительность в днях
            setEndDate(newEndDate.toISOString().split('T')[0]); // Обновляем дату окончания спринта в состоянии
        }
    }


    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    const handleButtonClick = () => {
        setModalIsOpen(!modalIsOpen); // инвертируем значение modalIsOpen
      };

      const showSprintData = () => {
        const newSprintData: SprintData = {
            sprintName: sprintName,
            goal: goal,
            duration: duration,
            startDate: startDate,
            endDate: endDate
        };
        setSprintDataList([...sprintDataList, newSprintData]);

        // Сбрасываем значения формы
        setSprintName('');
        setGoal('');
        setDuration('');
        setStartDate('');
        setEndDate('');

        // Закрываем модальное окно
        setModalIsOpen(true); // При нажатии на кнопку, устанавливаем showData в true
    };

    const deleteAllSprint = () => {
        setSprintDataList([]);
        
    }
    

    return (
        <div>
            <h1>Создание спринта</h1>
            <div className="btns">
            <Button action="Remove" className="remove_btn" onClick={deleteAllSprint}>Delete Sprints</Button>
            <Button action="openModal" className="open_modal" onClick={handleButtonClick}>
                <Button className="main_page"><Link className="link_btn" to='/'>Home</Link></Button>
                    <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                        <form onClick={(e) => e.stopPropagation()} className="form_modal">
                            <h1 className="header">Start Sprint</h1> 
                            <Input type="text" placeholder="Name Sprint" className="sprint_name" value={sprintName} onChange={(e) => setSprintName(e.target.value)}></Input>
                            <TextArea placeholder="Goal" className="goal_name" value={goal} onChange={(e) => setGoal(e.target.value)}></TextArea>
                            <Input type="date" placeholder="StartDate" className="start_date_name" value={startDate} onChange={StartDateChange} required></Input>
                            <Select className="duration_name" value={duration} onChange={DurationChange}></Select>
                            <Input type="date" placeholder="EndDate" className="end_date_name" value={endDate} readonly></Input>
                            <Button action="closeModal" className="close_modal" onClick={closeModal}>Cancel</Button>
                            <Button action="Start Sprint" className="start_sprint" onClick={showSprintData}/>
                        </form>
                    </Modal>
            </Button>
            </div>
            {sprintDataList.map((sprint, index) => (
                    <div className="info" key={index}>
                        <h2>Данные спринта {index + 1}:</h2>
                        <p>Имя спринта: {sprint.sprintName}</p>
                        <p>Цель спринта: {sprint.goal}</p>
                        <p>Длительность спринта: {sprint.duration}</p>
                        <p>Дата начала спринта: {sprint.startDate}</p>
                        <p>Дата окончания спринта: {sprint.endDate}</p>
                    </div>
            ))}
        </div>
    )
}


export default Sprint;