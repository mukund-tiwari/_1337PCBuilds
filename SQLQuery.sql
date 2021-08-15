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

insert into CustomerPCBuildDetails ([Name], EmailId, UseCase, Budget, AdditionalNotes)
values ('Customer#1', 'cus#1@gmail.com', 'Gaming', 'under INR 50,000', 'placeholder text3')
GO

select * from CustomerPCBuildDetails
GO

drop table CustomerPCBuildDetails
GO

ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = OFF
GO