create table CustomerPCBuildDetails(
CustomerId int not null identity(1,1) unique,
[Name] varchar(255) not null,
EmailId varchar(255) not null primary key check (EmailId like '%@%.%'),
DateofEnq datetime not null Default GetDate(),
UseCase varchar(255) not null,
Budget varchar(255) not null,
AdditionalNotes varchar(255)
)
GO

insert into CustomerPCBuildDetails (EmailId, UseCase, UseCaseNotes, Budget, BudgetCustom, AdditionalNotes)
values ('cus3@demo.com', 'Video Editing3', 'Use DaVinci3', 'under 75,000', 'under 70k', 'placeholder text3')
GO

select * from CustomerPCBuildDetails
GO

drop table CustomerPCBuildDetails
GO

ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = OFF
GO