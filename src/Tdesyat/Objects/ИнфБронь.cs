﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tdesyat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Информация бронирования.
    /// </summary>
    // *** Start programmer edit section *** (ИнфБронь CustomAttributes)

    // *** End programmer edit section *** (ИнфБронь CustomAttributes)
    [AutoAltered()]
    [Caption("Информация бронирования")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИнфБроньE", new string[] {
            "Пассажир as \'Пассажир\'",
            "Пассажир.ФИО as \'ФИО\'",
            "Пассажир.КодБрони.Код as \'Код бронирования\'",
            "Пассажир.МестоНаРейс.Место as \'Место\'",
            "Пассажир.МестоНаРейс.Класс as \'Класс\'"}, Hidden=new string[] {
            "Пассажир.ФИО"})]
    [MasterViewDefineAttribute("ИнфБроньE", "Пассажир", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class ИнфБронь : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Tdesyat.Пассажир fПассажир;
        
        private IIS.Tdesyat.Рейс fРейс;
        
        // *** Start programmer edit section *** (ИнфБронь CustomMembers)

        // *** End programmer edit section *** (ИнфБронь CustomMembers)

        
        /// <summary>
        /// Информация бронирования.
        /// </summary>
        // *** Start programmer edit section *** (ИнфБронь.Пассажир CustomAttributes)

        // *** End programmer edit section *** (ИнфБронь.Пассажир CustomAttributes)
        [PropertyStorage(new string[] {
                "Пассажир"})]
        [NotNull()]
        public virtual IIS.Tdesyat.Пассажир Пассажир
        {
            get
            {
                // *** Start programmer edit section *** (ИнфБронь.Пассажир Get start)

                // *** End programmer edit section *** (ИнфБронь.Пассажир Get start)
                IIS.Tdesyat.Пассажир result = this.fПассажир;
                // *** Start programmer edit section *** (ИнфБронь.Пассажир Get end)

                // *** End programmer edit section *** (ИнфБронь.Пассажир Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфБронь.Пассажир Set start)

                // *** End programmer edit section *** (ИнфБронь.Пассажир Set start)
                this.fПассажир = value;
                // *** Start programmer edit section *** (ИнфБронь.Пассажир Set end)

                // *** End programmer edit section *** (ИнфБронь.Пассажир Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Tdesyat.Рейс.
        /// </summary>
        // *** Start programmer edit section *** (ИнфБронь.Рейс CustomAttributes)

        // *** End programmer edit section *** (ИнфБронь.Рейс CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Рейс"})]
        public virtual IIS.Tdesyat.Рейс Рейс
        {
            get
            {
                // *** Start programmer edit section *** (ИнфБронь.Рейс Get start)

                // *** End programmer edit section *** (ИнфБронь.Рейс Get start)
                IIS.Tdesyat.Рейс result = this.fРейс;
                // *** Start programmer edit section *** (ИнфБронь.Рейс Get end)

                // *** End programmer edit section *** (ИнфБронь.Рейс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфБронь.Рейс Set start)

                // *** End programmer edit section *** (ИнфБронь.Рейс Set start)
                this.fРейс = value;
                // *** Start programmer edit section *** (ИнфБронь.Рейс Set end)

                // *** End programmer edit section *** (ИнфБронь.Рейс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИнфБроньE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнфБроньE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнфБроньE", typeof(IIS.Tdesyat.ИнфБронь));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ИнфБронь.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfИнфБронь CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfИнфБронь CustomAttributes)
    public class DetailArrayOfИнфБронь : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Tdesyat.DetailArrayOfИнфБронь members)

        // *** End programmer edit section *** (IIS.Tdesyat.DetailArrayOfИнфБронь members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ИнфБронь by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ИнфБронь.
        /// </summary>
        public DetailArrayOfИнфБронь(IIS.Tdesyat.Рейс fРейс) : 
                base(typeof(ИнфБронь), ((ICSSoft.STORMNET.DataObject)(fРейс)))
        {
        }
        
        public IIS.Tdesyat.ИнфБронь this[int index]
        {
            get
            {
                return ((IIS.Tdesyat.ИнфБронь)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Tdesyat.ИнфБронь dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
